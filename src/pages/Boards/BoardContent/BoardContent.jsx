import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext, /*PointerSensor,*/ useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  // yeu cau chuot di chuyen 10px thi moi kich hoat event, fix truong howpj click bi goi event
  // Neu dung pointerSensor mac dinh thi phai ket hop voi thuoc tinh CSS touch-action: none o phan tu keo tha- nhung con bug
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  // Nhan giu khoang 250 ms va dung sai cam ung 500px thi moi kich hoa event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  // uu tien su dung ket hop 2 loai sensors la mouse va touch de co rtai nghiem tren mobile tot nhat, khong bi bug
  const mySensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    console.log ('🚀 ~ handleDragEnd ~ event:', event)
    const { active, over } = event
    // Kiem tra xem neu khong ton tai over tuc over: null(keo linh tinh ra ngoai thi return luon)
    if (!over) return

    if (active.id !== over.id ) {
      // lay vi tri cu tu thang active
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      // lay vi tri cu moi thang over
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)

      // Dung arrayMove cua thanh dnd-kit de sap xep lai mang Columns ban dau
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.log("🚀 ~ handleDragEnd ~ dndOrderedColumnsIds:", dndOrderedColumnsIds)
      // console.log("🚀 ~ handleDragEnd ~ dndOrderedColumns:", dndOrderedColumns)

      // Cap nhat lai state columns ban dau sau khi keo tha
      setOrderedColumns(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
      <Box sx ={{
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: '12px 0 10px 0'
      }}>
        <ListColumns columns={orderedColumns}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent
