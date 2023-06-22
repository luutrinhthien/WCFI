import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Box, Select, Text, Button, Checkbox, Stack } from '@chakra-ui/react'
import ChildrenFilter from './ChildrenFilter';

export default function Filter({ isOpen, onClose, setItemQuery, setIsFilter }) {
    const [selectedValue, setSelectedValue] = React.useState('Max');

    const [showTier, setShowTier] = useState(1)

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        if (selectedValue == "Max")
            setSelectedValue("Min")
        else
            setSelectedValue("Max")
    };

    let arrayCountry = []
    const [isChecked, setIsChecked] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const handleCheckboxChange = (id) => {
        let temp = []
        for (let i = 0; i < 32; i++) {
            if (i == id) {
                temp[i] = !isChecked[id]
            } else
                temp[i] = isChecked[i];
        }
        setIsChecked(temp);
    };
    const handleCheckedFunction = (country) => {
        arrayCountry.push(country);
    };

    const handleUncheckedFunction = (country) => {
    };

    return (
        <Modal motionPreset='slideInBottom' isOpen={isOpen} onClose={() => { onClose() }} className='transparent-div'>
            <ModalOverlay backgroundColor={"rgba(25, 29, 36, 0.64)"} backdropFilter={"blur(5px)"} />
            <ModalContent rounded={"xl"} backgroundColor={"transparent"}>
                <ModalHeader display={"flex"} justifyContent={"space-between"} backgroundColor={"#0E1114"}>
                    <Box color={"white"}>Filters</Box>
                    <Button color={"white"} variant={"unstyled"} fontSize={20} onClick={() => { onClose() }}>&times;</Button>
                </ModalHeader>

                <ModalBody p={3} pl={6} pr={6} pt={4} backgroundColor={"#0E1114"} pb={4} color={"white"}>
                    <Text fontWeight={"bold"}>Price</Text>
                    <Box display={"flex"} justifyContent={"space-between"} color={"rgba(81, 89, 101, 1)"} fontWeight={"bold"}>
                        <Select w={"40%"} value={selectedValue} onChange={handleSelectChange}>
                            <option value='Min'>Min</option>
                            <option value='Max'>Max</option>
                        </Select>
                        <Text fontSize={18} fontWeight={"light"}>To</Text>
                        <Select w={"40%"} >
                            <option value='option1'>{selectedValue == "Min" ? "Max" : "Min"}</option>
                        </Select>
                    </Box>
                    <Box mt={5}>
                        <Text fontWeight={"bold"}>National Team</Text>
                        <Box display={"flex"} mt={4}>
                            <Box w={"25%"} mr={3} borderRight={"1px rgba(121,129,151,0.2) solid"}>
                                <Button fontSize={16} style={{ background: (showTier == 1 ? 'linear-gradient(to right, #80E8DD, #D855A6)' : ''), WebkitBackgroundClip: (showTier == 1 ? 'text' : ''), WebkitTextFillColor: (showTier == 1 ? 'transparent' : "") }} variant={"unstyled"} p={2} onClick={() => setShowTier(1)}>Tier 1</Button>
                                <Button fontSize={14} color={showTier == 2 ? "yellow" : "white"} variant={"unstyled"} p={2} onClick={() => setShowTier(2)}>Tier 2</Button>
                                <Button fontSize={14} color={showTier == 3 ? "blue" : "white"} variant={"unstyled"} p={2} onClick={() => setShowTier(3)}>Tier 3</Button>
                                <Button fontSize={14} color={showTier == 4 ? "gray" : "white"} variant={"unstyled"} p={2} onClick={() => setShowTier(4)}>Tier 4</Button>
                            </Box>
                            <Box w={"70%"}>
                                <ChildrenFilter isChecked={isChecked}
                                    handleCheckboxChange={handleCheckboxChange}
                                    handleCheckedFunction={handleCheckedFunction}
                                    handleUncheckedFunction={handleUncheckedFunction}
                                    showTier={showTier} />
                            </Box>
                        </Box>
                    </Box>
                </ModalBody>
                <ModalFooter backgroundColor={"#0E1114"}>
                    <div className="rounded-xl mt-1 mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                        <Box className="flex flex-col justify-between h-full rounded-lg" bg='black'>
                            <Button onClick={() => {
                                setIsChecked([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
                                console.log(arrayCountry);
                            }}>
                                <Text fontSize={14}>
                                    Reset
                                </Text>
                            </Button>
                        </Box>
                    </div>
                    <Button
                        mt={1}
                        minW={"75%"}
                        rounded={12}
                        dropShadow={'inner'}
                        border={'black solid 2px'}
                        boxShadow={"3px 3px white"}
                        style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)' }}
                        onClick={() => { console.log(arrayCountry); onClose(); setItemQuery(arrayCountry); setIsFilter(prev => !prev) }}>
                        <Text fontSize={14}>
                            Apply
                        </Text>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
