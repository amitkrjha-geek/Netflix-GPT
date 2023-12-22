import OpenAI from "openai";
import { OPEN_API_KEY } from "./constants";
const openai = new OpenAI({
    apiKey:OPEN_API_KEY
})

export default openai;  