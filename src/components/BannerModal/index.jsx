import CardMedia from "@mui/material/CardMedia";
import comercio1 from "../../img/comercio1.jpg";
import { Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
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
import { AiOutlineCheck } from 'react-icons/ai';
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
  const [itemsTrack, setItemsTrack] = useState([]);

  const [isImageLimit, setIsImageLimit] = useState(
    images.length >= 5 ? false : true
  );

  let itemsTrackOut = [];
  let itemsid;
  if (images) {
    itemsid = images.map((_, index) => {
      return index;
    });
  }
  const [itemsId, setItemsId] = useState(itemsid);

  let { uuid } = useParams();

  useEffect(()=>{
    let itemsTrackX = images.map((element) => {
      return element;
    });
    itemsTrackOut = itemsTrackX;
    setItemsTrack(itemsTrackX);
  },[images]);

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
      const imageTrackIndex = itemsTrack.indexOf(active.id);
      const itemToDelete = itemsTrack[imageTrackIndex];
      setActiveId(null);

      setItemsDelete(() => {
        let newArray = itemsDelete.map((element) => {
          return element;
        });
        newArray.push(itemToDelete);
        return newArray;
      });

      setItems((items) => {
        let newArray = items.map((element) => {
          return element;
        });
        newArray.splice(imageIndex, 1);
        setItemsTrack((itemsTrack)=> {
          itemsTrack[imageTrackIndex] = undefined;
          itemsTrackOut[imageTrackIndex] = undefined;
          return itemsTrack;
        });
        return newArray;
      });

      setItemsId((itemsId) => {
        let newArray = itemsId.map((element) => {
          return element;
        });
        let valueToRemove = newArray.indexOf(imageTrackIndex);
        newArray.splice(valueToRemove, 1);
        setIsImageLimit(itemsId.length >= 4 ? false : true);
        return newArray;
      });

      return;
    }

    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      const oldTrackIndex = itemsTrack.indexOf(active.id);
      const newTrackIndex = itemsTrack.indexOf(over.id);
      const newIdIndex = itemsId.indexOf(newTrackIndex);
      const oldIdIndex = itemsId.indexOf(oldTrackIndex);
      
      setItemsId(() => {
        let newArray = itemsId.map((element) => {
          return element;
        });
        newArray[oldIdIndex] = itemsId[newIdIndex];
        newArray[newIdIndex] = itemsId[oldIdIndex];
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
    const lastIdTrack = itemsTrack.length;
    setItemsTrack((itemsTrack)=> {
      let newArray = itemsTrack.map((element) => {
        return element;
      });
      itemsTrackOut.push(preview);
      newArray.push(preview);
      return newArray;
    
    });

    setNewImagens(newImagens.concat(file));
    setItemsId(() => {
      let newArray = itemsId.map((element) => {
        return element;
      });
      // colocar na ultima pos das imagens
      newArray.push(lastId + 1);
      setNewImagesIdPos(() => {
        let newArray = newImagesIdPos.map((element) => {
          return element;
        });
        newArray.push(lastIdTrack);
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
    setIsImageLimit(itemsId.length >= 5 ? false : true);
  };

  const handleSubmit = async () => {
    let bannerForm = new FormData();
    let newImagesIndex = [];
    let counter = 5;
    let maxItems = 5;

    if (itemsid.toString() != itemsId.toString()) {
      itemsDelete.forEach((element) => {
        if(element[0] != 'b'){
          let uuid = element
          bannerForm.append("imageDelete", uuid);
        }
      });

      itemsId.forEach(async (element, index) => {
        let oldIndex = parseInt(element);
        let name = itemsTrack[oldIndex];
        if(name[0] == 'b'){
          let imageindex;
          for (let i = 0; i < newImagesIdPos.length; i++) {
            const element = newImagesIdPos[i];
            if(element == oldIndex){
              imageindex = i;
              break;
            }
          }
          newImagesIndex.push(index);
          name = imageindex;
        } else {
          let replacePath = "https://youout-78dca879-0807-48b5-832f-af52319fefe9.s3.us-east-2.amazonaws.com/" + uuid + /banners/;
          let tempname = name.replace(replacePath, "");
          tempname = tempname.split("."); 
          name = tempname[0];
        }
        let data = {
          uuid: name,
          oldIndex: oldIndex,
        }
        console.log(data);
        bannerForm.append("ordemOldId", oldIndex);
        bannerForm.append("ordemUuid", name);
        counter--;
      });
    }

    console.log(counter);
    bannerForm.append("deleteStartIndex", maxItems-counter);

    newImagens.forEach((element, index) => {
      element.id_pos = newImagesIndex[index];
      console.log(element);
      bannerForm.append("banners", element);
      bannerForm.append("newImagesIdPos", element.id_pos);
    });

    try {
      console.log(bannerForm);
      await updateBannersImage(uuid, bannerForm);
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
            justifyContent: "end",
          }}
        >
           {items.length > 0 && (
          <Droppable />)}
          <Button
            variant="contained"
            component="label"
            onClick={handleImageLimit}
            sx={{marginLeft: "2vh", marginRight: "2vh" }}
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
       
        {Array.isArray(items) && items.length > 0 ? (
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <Grid columns={2}>
              {items.map((url, index) => {
                if (url) {
                  return (
                    <ImageSortable
                      key={index}
                      url={url}
                      index={index}
                      onClick={() => {
                        console.log("rwe");
                      }}
                    />
                  );
                }
              })}
            </Grid>
          </SortableContext>
          ) : (  <p style={{fontSize: "4vh", textAlign:"center", marginTop:"10vh"}}>Nenhuma imagem cadastrada para essa unidade. Clique em  <BsPlusCircleFill size={30}color={"#8200A8"}/> para cadastrar.</p>)}

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Image url={activeId} index={items.indexOf(activeId)} />
            ) : null}
        </DragOverlay>
      </DndContext>
            {items.length > 0 && (
      <div className="divButtonsAdd">
            {/* <button onClick={handleSubmit}>
              Salvar imagens
            </button> */}
            <Fab
              style={{
                width: "25vh",
                borderRadius: "5px",
                backgroundColor: '#8200A8',
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#8200A8',  
                },
              }}
              aria-label="salvar imagens"
              onClick={handleSubmit}
            >
              <AiOutlineCheck size={30} style={{ marginRight: "8px" }} /> Salvar
              Imagens
            </Fab>
          </div>
      )}
    </div>
  );
}
