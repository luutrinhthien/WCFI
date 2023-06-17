import React from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { useState, useEffect } from 'react'
import { Button } from 'web3uikit'
import NavBar from '../components/NavBar'
import { getData, saveData, updateData } from '../utils/localStorage'
import Asset from '../components/asset'

export default function asset() {

    return (
        <>
            <Asset />
        </>
    )
}
