import data from "@/lib/data"
import dbConnect from "@/lib/dbConnect"
import ProductModel from "@/lib/models/ProductModel"
import UserModel from "@/lib/models/UserModel"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
  try {
    const { users, products } = data
    await dbConnect()

    // Delete existing users and products
    await UserModel.deleteMany()
    await UserModel.insertMany(users)
    
    await ProductModel.deleteMany()
    await ProductModel.insertMany(products)

    return NextResponse.json({
      message: 'seeded successfully',
      users,
      products,
    })
  } catch (error: any) {
    return NextResponse.json({
      message: 'Error seeding data',
      error: error.message,
    }, { status: 500 })
  }
}
