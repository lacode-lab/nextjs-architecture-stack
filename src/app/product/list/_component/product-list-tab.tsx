"use client"

import React from "react"
import { Card, CardContent, Typography, Box } from "@mui/material"

interface Product {
  productName: string
  price: number
  productCode: string
  caption: string
}

interface ProductListTabProps {
  data: Product[] // データをpropsとして受け取る
}

export const ProductListTab = ({ data }: ProductListTabProps) => {
  return (
    // <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // 垂直方向の中央揃え
        // minHeight: "100vh", // コンテナの高さを画面全体に
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
