"use client"

import React from "react"
import { Card, CardContent, Typography, Box } from "@mui/material"

import type { paths } from "@/types/lib/api/openapi-types"

type GetNoveltyResponse =
  paths["/novelties"]["get"]["responses"]["200"]["content"]["application/json"]

interface NoveltyListTabProps {
  data: GetNoveltyResponse
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
