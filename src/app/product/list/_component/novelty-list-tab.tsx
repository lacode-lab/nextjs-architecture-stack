"use client"

import React from "react"
import { Card, CardContent, Typography, Box } from "@mui/material"

interface Product {
  productName: string
  price: number
  productCode: string
  caption: string
}

interface NoveltyListTabProps {
  data: Product[] // データをpropsとして受け取る
}

export const NoveltyListTab = ({ data }: NoveltyListTabProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mt: 2,
      }}
    >
      {data.map((product, index) => (
        <Card key={index} sx={{ width: "300px" }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {product.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Code: {product.productCode}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ¥{product.price}
            </Typography>
            <Typography variant="body2" mt={1}>
              {product.caption}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
