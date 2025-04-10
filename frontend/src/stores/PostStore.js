import { create } from 'zustand'

const usePostStore = create((set) => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/posts");
                const data = await response.json();
                set({posts: data})
            }
            catch(e) {
                console.error("Error in promise", e);
            }
        }

        fetchData();

        return {
            posts: []
        }
    });

export { usePostStore };
