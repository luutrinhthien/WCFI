import React from 'react'

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

function updateData(key, newData) {
    const data = getData(key);
    const updatedData = { ...data, ...newData };
    saveData(key, updatedData);
}

function deleteData(key) {
    localStorage.removeItem(key);
}

module.exports = {
    saveData, getData, updateData, deleteData
}