from fastapi import FastAPI
import ollama

app = FastAPI()

#defining the endpoint
@app.post("/generate")
def generate(query:  str):
    prompt = "/no_think Summarise this : {user_query} /no_think".format(user_query=query)
    response = ollama.chat(model="qwen3:8b", messages=[{"role": "user", "content": prompt}])
    return {"response": response["message"]["content"]}

