import CardMedia from "@mui/material/CardMedia";
import comercio1 from "../../img/comercio1.jpg";
import { Button } from "@mui/material";
import { useState, useContext } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useParams } from "react-router-dom";

import Fab from "@mui/material/Fab";
import { BsPlusCircleFill } from "react-icons/bs";

// import photos from './photos.json';
import ImageSortable from "./ImageSortable";
import Image from "./Image";
import { Grid } from "./grid";
import Droppable from "./Droppable";
import { updateBannersImage } from "../../services/commerce";

import UuidContext from "../../contexts/uuidCommerceContext";

const photos = [
  "https://source.unsplash.com/WLUHO9A_xik/900x900",
  "https://source.unsplash.com/R4K8S77qtwI/900x900",
  "https://source.unsplash.com/jJGc21mEh8Q/900x900",
  "https://source.unsplash.com/omNxg6JP6Fo/900x900",
  "https://source.unsplash.com/-M1gkucIqkQ/900x900",
  "https://source.unsplash.com/czOuPVsfHDw/900x900",
  "https://source.unsplash.com/-vr0gMUM6Fk/900x900",
  "https://source.unsplash.com/TsMuMM_qVec/900x900",
];

// fazer função de atualizar as posicoes
// fazer função de adicionar imagem e atualizar posição
// deletar imagens
// deixar no maximo adicionar 5 imagens

export default function ModalImagens({ setModalOpen, images }) {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState(images);
  const [selectedIMG, setSelectedIMG] = useState();
  const [newImagens, setNewImagens] = useState([]);
  const [newImagesIdPos, setNewImagesIdPos] = useState([]);
  const [itemsDelete, setItemsDelete] = useState([]);
  const [itemsNewPos, setItemsNewPos] = useState([]);
  const [lastId, setLastId] = useState(images.length - 1);

  const [isImageLimit, setIsImageLimit] = useState(
    images.length >= 5 ? false : true
  );

  let itemsid;
  if (images) {
    itemsid = images.map((_, index) => {
      return index;
    });
  }
  const [itemsId, setItemsId] = useState(itemsid);

  let { uuid } = useParams();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  // irei cegamente confiar nesse codigo
  function handleDragEnd(event) {
    const { active, over } = event;

    if (over.id == "delete") {
      const imageIndex = items.indexOf(active.id);
      setActiveId(null);
      setItems((items) => {
        let newArray = items.map((element) => {
          return element;
        });
        newArray[imageIndex] = undefined;
        return newArray;
      });
      setItems((items) => items.filter((element) => element !== active.id));

      setItemsDelete(() => {
        let newArray = itemsDelete.map((element) => {
          return element;
        });
        newArray.push(itemsId[imageIndex]);
        return newArray;
      });
      setItemsId((itemsId) =>
        itemsId.filter((element, index) => element !== imageIndex)
      );
      setIsImageLimit(items.length >= 4 ? false : true);
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      setItemsId(() => {
        let newArray = itemsId.map((element) => {
          return element;
        });
        newArray[oldIndex] = itemsId[newIndex];
        newArray[newIndex] = itemsId[oldIndex];
        return newArray;
      });
      setItems(arrayMove(items, oldIndex, newIndex));
    }

    setActiveId(null);
  }
  function handleDragCancel() {
    setActiveId(null);
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);

    setNewImagens(newImagens.concat(file));
    setItemsId(() => {
      let newArray = itemsId.map((element) => {
        return element;
      });
      newArray.push(lastId + 1);
      setNewImagesIdPos(() => {
        let newArray = newImagesIdPos.map((element) => {
          return element;
        });
        newArray.push(lastId + 1);
        return newArray;
      });
      setLastId(lastId + 1);
      return newArray;
    });
    let newArray = items.map((element) => element);
    newArray.push(preview);
    setItems(newArray);
  };

  const handleImageLimit = () => {
    setIsImageLimit(items.length >= 5 ? false : true);
  };

  const handleSubmit = async () => {
    let bannerForm = new FormData();
    console.log(newImagens);
    console.log(itemsId);

    if (itemsid.toString() != itemsId.toString()) {
      itemsDelete.forEach((element) => {
        bannerForm.append("imageDelete", element);
      });
      itemsId.forEach((element) => {
        bannerForm.append("ordem", element);
      });
    }

    newImagens.forEach((element, index) => {
      element.id_pos = newImagesIdPos[index];
      bannerForm.append("banners", element);
      bannerForm.append("newImagesIdPos", element.id_pos);
    });

    console.log(items)
    console.log(itemsId);
    try {
      // console.log(uuid);
      // await updateBannersImage(uuid, bannerForm);
      setModalOpen(false);
    } catch (error) {
      console.log(error.constructor.name);
    }
  };

  return (
    <div className="conteinerImageSelector">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Droppable />
          <Fab color="primary" aria-label="add" onClick={handleSubmit}>
            <BsPlusCircleFill size={30} />
          </Fab>
          <Button
            variant="contained"
            component="label"
            onClick={handleImageLimit}
            // sx={{, margin: "2vh 0 0 42vh" }}
          >
            <BsPlusCircleFill
              size={35}
              color="--var(secondary-color)"
              containerElement="label"
            />
            {isImageLimit && (
              <input
                type="file"
                hidden
                accept=".jpg, .jpeg, .png, .jfif"
                onChange={handleImageChange}
              />
            )}
          </Button>
        </div>
        {items && (
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <Grid columns={2}>
              {items.map((url, index) => {
                if(url){
                  return  <ImageSortable
                  key={index}
                  url={url}
                  index={index}
                  onClick={() => {
                    console.log("rwe");
                  }}
                />
                }
                })}
            </Grid>
          </SortableContext>
        )}

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Image url={activeId} index={items.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
