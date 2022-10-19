import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/ui/editForm";
import httpService from "../services/http.service";
import config from "../config.json";

const EditQualityPage = () => {
    const [quality, setQuality] = useState(null);

    const id = useParams().id;
    const qualityEndPoint = `quality/${id}`;

    const handleSubmit = async (data) => {
        try {
            await httpService
                .put(qualityEndPoint, data)
                .then(res => console.log(res.data.content));
        } catch (error) {
            console.log("Error")
            console.log("Expected Error")
        }
    };

    useEffect(async () => {
        const { data } = await httpService.get(qualityEndPoint);
        setQuality(data.content);
    }, []);

    return (
        <>
            <h1>Edit Quality Page</h1>{" "}
            {quality !== null ? <EditForm data={quality} onSubmit={handleSubmit} /> : "Loading..."}
        </>
    );
};

export default EditQualityPage;
