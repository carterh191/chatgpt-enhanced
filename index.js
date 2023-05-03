import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-Xensq0feVgx5AVs64jV0j1im",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();