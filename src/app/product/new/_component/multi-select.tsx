"use client"

import React, { useState } from "react"
import {
  Control,
  FieldErrors,
  useFormContext,
  UseFormSetValue,
  useWatch,
} from "react-hook-form"
import { ProductSchemaForm } from "@/product/types/product-scheme"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Box,
  Typography,
} from "@mui/material"

interface MultiSelectProps {
  control: Control<ProductSchemaForm>
  setValue: UseFormSetValue<ProductSchemaForm>
  errors: FieldErrors<ProductSchemaForm>
}

const options = [
  { id: "option1", label: "選択肢1" },
  { id: "option2", label: "選択肢2" },
  { id: "option3", label: "選択肢3" },
  { id: "option4", label: "選択肢4" },
]

export const MultiSelect: React.FC<MultiSelectProps> = ({
  control,
  setValue,
  errors,
}) => {
  const [open, setOpen] = useState(false)
  const selectedItems = useWatch({ control, name: "selectedItems" }) ?? []

  const handleToggle = (id: string) => {
    const currentValues = selectedItems || []
    const newValues = currentValues.includes(id)
      ? currentValues.filter((item: string) => item !== id)
      : [...currentValues, id]
    setValue("selectedItems", newValues)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6">選択された値:</Typography>
      <Typography>
        {selectedItems.length > 0 ? selectedItems.join(", ") : "未選択"}
      </Typography>

      <Button variant="outlined" onClick={() => setOpen(true)} sx={{ mt: 2 }}>
        選択肢を開く
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>選択してください</DialogTitle>
        <DialogContent>
          <List>
            {options.map((option) => (
              <ListItem key={option.id} disablePadding>
                <ListItemButton onClick={() => handleToggle(option.id)}>
                  <ListItemIcon>
                    <Checkbox checked={selectedItems.includes(option.id)} />
                  </ListItemIcon>
                  <ListItemText primary={option.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
