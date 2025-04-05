import { create } from "zustand";
import createSelectors from "./CreateSelectors";

const usePostStoreBase = create((set) => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://backend:8080/posts");
                const data = await response.json();
                set({products: data})
            }
            catch(e) {
                console.error(e);
            }
        }

        fetchData();

        return {
            products: []
        }
    });

const usePostStore = createSelectors(usePostStoreBase);

export { usePostStore };
