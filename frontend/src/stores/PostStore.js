import { create } from 'zustand'

const usePostStore = create((set) => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://backend:8080/posts");
                const data = await response.json();
                set({posts: data})
            }
            catch(e) {
                console.error("Error in promis", e);
            }
        }

        fetchData();

        return {
            posts: []
        }
    });

export { usePostStore };
