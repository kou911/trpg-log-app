import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;

// [GET] /api/categories カテゴリ一覧の取得
export const GET = async (req: NextRequest) => {
  console.log("GET /api/categories");
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc", // 降順 (新しい順)
      },
    });
    // return NextResponse.json({
    //   isSuccess: true,
    //   contents: categories,
    // });
    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "カテゴリの取得に失敗しました" },
      { status: 500 } // 500: Internal Server Error
    );
  }
};
