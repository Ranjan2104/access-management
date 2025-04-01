import { useState, useEffect } from "react";
import { analyticsCardsData } from "./constants";

interface AnalyticsCardProps {
    title: string;
    value: string;
    change: string;
    changeColor: string;
    status: string;
    environment: string;
    template: string;
}

export const useApplyFilter = () => {

    const [originalData, setOriginalData] = useState<AnalyticsCardProps[]>([]);
    const [filterData, setFilterData] = useState<AnalyticsCardProps[]>([]);
    const [filter, setFilter] = useState({ workflowTemplate: "All Templates", environment: "All Environments", status: "All Status" });

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                // api calls
                setOriginalData(analyticsCardsData);
                setFilterData(analyticsCardsData);
            } catch (error) {
                console.log("error", error);
                return error;
            }
        }
        fetchAnalyticsData();
    }, []);

    useEffect(() => {
        let _filetrData = originalData;
        if (filter.workflowTemplate && filter.workflowTemplate !== "All Templates") {
            _filetrData = _filetrData.filter((ele) => ele.template.toLowerCase() === filter.workflowTemplate.toLowerCase());
        }
        if (filter.environment && filter.environment !== "All Environments") {
            _filetrData = _filetrData.filter((ele) => ele.environment.toLowerCase() === filter.environment.toLowerCase());
        }
        if (filter.environment && filter.status !== "All Status") {
            _filetrData = _filetrData.filter((ele) => ele.status.toLowerCase() === filter.status.toLowerCase());
        }
        setFilterData(_filetrData)
    }, [filter, originalData])

    const updateFilter = (newFilter: { workflowTemplate?: string; environment?: string; status?: string }) => {
        setFilter((prev) => ({ ...prev, ...newFilter }));
    }

    return { filterData, updateFilter };
}