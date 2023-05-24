import {NextRequest, NextResponse} from "next/server"
import {prisma} from "../../../../../prisma/prisma"

export async function GET() {
    const messages = await prisma.message.findMany()
    return NextResponse.json(messages)
}

export async function POST(req:NextRequest) {
    const { content, parentId } = await req.json()
    const response = await prisma.message.create({
        data : { content, parentId }
    })
    return NextResponse.json(response)
}
