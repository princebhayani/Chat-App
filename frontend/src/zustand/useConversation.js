import { create } from "zustand";

const useConversation =create((set)=>({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    message:[],
    setMessage:(message)=>set({message}),
}));

export default useConversation;