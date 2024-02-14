import React from 'react'
import { Box, Select, Text, Button, Checkbox, Stack } from '@chakra-ui/react'
import CheckBox from './CheckBox'

export default function ChildrenFilter({ isChecked, handleCheckboxChange, handleCheckedFunction,
    handleUncheckedFunction, showTier }) {
    return (
        <>
            <Stack hidden={showTier != 1} spacing={[1, 5]} >
                <CheckBox number={0} country={"france"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={1} country={"england"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={2} country={"spain"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={3} country={"turkey"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={4} country={"belgium"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={5} country={"portugal"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
            </Stack>
            <Stack hidden={showTier != 2} spacing={[1, 5]} >
                <CheckBox number={6} country={"netherlands"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={7} country={"austria"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={8} country={"croatia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={9} country={"italy"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={10} country={"romania"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={11} country={"hungary"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
            </Stack>
            <Stack hidden={showTier != 3} spacing={[1, 5]} >
                <CheckBox number={12} country={"switzerland"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={13} country={"denmark"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={14} country={"slovakia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={15} country={"czech"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={16} country={"germany"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={17} country={"scotland"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
            </Stack>
            <Stack hidden={showTier != 4} spacing={[1, 5]} >
                <CheckBox number={18} country={"albania"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={19} country={"serbia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={20} country={"slovenia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
            </Stack>
        </>
    )
}
