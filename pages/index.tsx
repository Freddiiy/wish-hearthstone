import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HearthstoneCard from "../components/HearthstoneCard";

const Home: NextPage = () => {
  return (
      <>
        <HearthstoneCard id={1} health={5} attack={6} manaCost={12} name={"Rider biter"} text={"Bites you ind the ass"} image={"/funnycat.jpg"} flavorText={"I like turtles"} />
      </>
  )
}

export default Home
