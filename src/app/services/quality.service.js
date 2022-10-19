import httpService from "./http.service";

const qualityEndpoint = "quality/"

const qualityService = {
    get: async (id) => {
        const { data } = await httpService.get(qualityEndpoint + id);
        console.log(data);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(qualityEndpoint);
        return data;
    },
    update: async (id, content) => {
        const { data } = await httpService.put(qualityEndpoint + id + "sada", content);
        return data;
    }
};

export default qualityService;