import Model from "../../object/Model";
import ModelType from "../../object/ModelType";

const models: Array<Model> = [
    {
        id: 1,
        modelName: "google/gemma-7b",
        modelType: ModelType.TextGeneration
    },
    {
        id: 2,
        modelName: "ByteDance/SDXL-Lightning",
        modelType: ModelType.TextToImage
    },
    {
        id: 3,
        modelName: "briaai/RMBG-1.4",
        modelType: ModelType.ImageToImage
    }
]


const getAllModels = () : Array<Model> => {
    return models;
}

export { getAllModels };