import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
	const { systemMessage, userMessage } = await request.json();

	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	});

	const completion = await openai.chat.completions.create({
		model: "gpt-4o", // 必要に応じて "gpt-3.5-turbo" などに変更
		messages: [
			{ role: "system", content: systemMessage },
			{ role: "user", content: userMessage },
		],
	});

	return NextResponse.json({
		message: completion.choices[0].message,
	});
}
