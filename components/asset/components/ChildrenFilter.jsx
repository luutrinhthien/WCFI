import React from 'react'
import { Box, Select, Text, Button, Checkbox, Stack } from '@chakra-ui/react'
import CheckBox from './CheckBox'

export default function ChildrenFilter({ isChecked, handleCheckboxChange, handleCheckedFunction,
    handleUncheckedFunction, showTier }) {
    return (
        <>
            <Stack hidden={showTier != 1} spacing={[1, 5]} >
                <CheckBox number={0} country={"brazil"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={1} country={"france"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={2} country={"england"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={3} country={"spain"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={4} country={"germany"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={5} country={"argentina"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={6} country={"belgium"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={7} country={"portugal"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
            </Stack>
            <Stack hidden={showTier != 2} spacing={[1, 5]} >
                <CheckBox number={8} country={"netherlands"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={9} country={"denmark"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={10} country={"croatia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={11} country={"uruguay"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={12} country={"poland"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={13} country={"senegal"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={14} country={"usa"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={15} country={"serbia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
            </Stack>
            <Stack hidden={showTier != 3} spacing={[1, 5]} >
                <CheckBox number={16} country={"switzerland"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={17} country={"mexico"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={18} country={"wales"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={19} country={"ghana"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={20} country={"ecuador"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={21} country={"morocco"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={22} country={"cameroon"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={23} country={"canada"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
            </Stack>
            <Stack hidden={showTier != 4} spacing={[1, 5]} >
                <CheckBox number={24} country={"japan"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={25} country={"qatar"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={26} country={"tunisia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={27} country={"korea"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={28} country={"australia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={29} country={"iran"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={30} country={"saudiArabia"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
                <CheckBox number={31} country={"costaRica"} isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange} handleCheckedFunction={handleCheckedFunction}
                    handleUncheckedFunction={handleUncheckedFunction} />
            </Stack>
        </>
    )
}
