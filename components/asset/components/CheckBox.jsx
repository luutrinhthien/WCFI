import React from 'react'
import { Box, Select, Text, Button, Checkbox, Stack } from '@chakra-ui/react'

export default function CheckBox({ number, country, isChecked, handleCheckboxChange, handleCheckedFunction, handleUncheckedFunction }) {
    return (
        <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"}>
                <img src={`./flags/${country}.png`} width={26} height={26} alt="" />
                <Text ml={2} mt={1} fontSize={12}>{country.charAt(0).toUpperCase() + country.slice(1)}</Text>
            </Box>
            <Checkbox
                isChecked={isChecked[number]}
                onChange={() => handleCheckboxChange(number)}
                size='lg' colorScheme='teal' defaultChecked>
                {isChecked[number] ? handleCheckedFunction(country) : handleUncheckedFunction(country)}
            </Checkbox>
        </Box>
    )
}
