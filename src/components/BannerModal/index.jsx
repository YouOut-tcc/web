import CardMedia from "@mui/material/CardMedia";
import comercio1 from "../../img/comercio1.jpg";
import { Button } from "@mui/material";
import { useState } from "react";
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

import Fab from "@mui/material/Fab";
import { BsPlusCircleFill } from "react-icons/bs";

// import photos from './photos.json';
import ImageSortable from "./ImageSortable";
import Image from "./Image";
import { Grid } from "./grid";
import Droppable from "./Droppable";

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
  const itemsid = images.map((_, index) => {
    return index;
  });
  const [itemsId, setItemsId] = useState(itemsid);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  function handleDragEnd(event) {
    const { active, over } = event;

    if (over.id == "delete") {
      const imageIndex = items.indexOf(active.id);
      setActiveId(null);
      setItems((items) => items.filter((element) => element !== active.id));
      setItemsId((itemsId) =>
        itemsId.filter((_, index) => index !== imageIndex)
      );
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      setActiveId(() => {
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
  };
  function handleDragCancel() {
    setActiveId(null);
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);

    let newArray = items.map(element => element);
    newArray.push(preview);
    setItems(newArray);
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
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <Droppable />
          <Fab
            color="primary"
            aria-label="add"
            // onClick={() => {
            //   setOpenModalImagens(true);
            // }}
          >
            <BsPlusCircleFill size={30} />
          </Fab>
          <Button variant="contained" component="label"
          sx={{alignItems:"flex-end", margin: "2vh 0 0 42vh"}}>
            <BsPlusCircleFill
              size={35}
              color="--var(secondary-color)"
              containerElement="label"
            />
            <input type="file" hidden accept=".jpg, .jpeg, .png" onChange={handleImageChange}/>
          </Button>
        </div>

        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid columns={2}>
            {items.map((url, index) => (
              <ImageSortable
                key={index}
                url={url}
                index={index}
                onClick={() => {
                  console.log("rwe");
                }}
              />
            ))}
          </Grid>
        </SortableContext>
        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Image url={activeId} index={items.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
