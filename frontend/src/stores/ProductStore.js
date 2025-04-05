import { create } from "zustand";
import createSelectors from "./CreateSelectors";

const useProductStoreBase = create((set) => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://backend:8080/posts");
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

const useProductStore = createSelectors(useProductStoreBase);

export { useProductStore };
