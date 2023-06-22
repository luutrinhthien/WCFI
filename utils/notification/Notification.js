import React from 'react'

export const handleNewNotiWating = async (dispatch, tx) => {
    dispatch({
        type: "info",
        message: "Transaction pending!",
        title: "Transaction Notification",
        position: "topR",
        icon: "",
    })
}
export const handleNewNotiSuccess = async (dispatch, tx) => {
    dispatch({
        type: "success",
        message: `Transaction Completed! txHash: ${tx.hash}`,
        title: "Transaction Notification",
        position: "topR",
        icon: "",
        backgroundColor: "#191D24",
    })
}