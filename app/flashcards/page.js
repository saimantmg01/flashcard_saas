'use client'
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { CollectionReference, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { useRouter } from "next/navigation"

export default function Flashcards(){
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashCards] = useState([])

    useEffect(() =>{
        async function getFlashcards() {
            
        }
    })
}