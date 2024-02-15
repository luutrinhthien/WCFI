import React from 'react'
import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'

export default function Layer05() {
    return (
        <Box p={5}>
            <Text fontWeight={"extrabold"} fontSize={14}>Match Schedule</Text>
            <Text fontWeight={"hairline"} fontSize={10} color={"rgba(121,129,151,1)"}>Match day 1 of 3</Text>

            <Box>
                <Box mt={3} mb={3}>
                    <Text fontWeight={"hairline"} fontSize={10} color={"rgba(121,129,151,1)"}>Group A</Text>
                </Box>
                <Box mt={3} mb={3} display={"flex"} justifyContent={"space-between"}>
                    <Box display={'flex'}>
                        <Box>
                            <Box>
                                <Image alt={"germany"} src={`/flags/germany.png`} height={24} width={24}></Image>
                            </Box>
                            <Image alt={"scotland"} src={`/flags/scotland.png`} height={24} width={24}></Image>
                        </Box>
                        <Box>
                            <Text fontSize={12} fontWeight={"extrabold"} pl={1}>GER</Text>
                            <Text fontSize={12} style={{ paddingTop: "12px" }} alt={"ecuador"} fontWeight={"extrabold"} pl={1}>SCO</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text color={"rgba(121,129,151,1)"} fontSize={10} fontWeight={"hairline"} borderLeft={"1px solid rgba(41,49,61,1)"} pl={2}>15/06</Text>
                        <Text color={"rgba(121,129,151,1)"} fontSize={10} style={{ paddingTop: "5px" }} alt={"ecuador"} fontWeight={"hairline"} borderLeft={"1px solid rgba(41,49,61,1)"} pl={2}>02:00</Text>
                    </Box>
                </Box>
                <Box mt={3} mb={3} display={"flex"} justifyContent={"space-between"}>
                    <Box display={'flex'}>
                        <Box>
                            <Box>
                                <Image alt={"hungary"} src={`/flags/hungary.png`} height={24} width={24}></Image>
                            </Box>
                            <Image alt={"switzerland"} src={`/flags/switzerland.png`} height={24} width={24}></Image>
                        </Box>
                        <Box>
                            <Text fontSize={12} fontWeight={"extrabold"} pl={1}>HUN</Text>
                            <Text fontSize={12} style={{ paddingTop: "12px" }} alt={"ecuador"} fontWeight={"extrabold"} pl={1}>SUI</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text color={"rgba(121,129,151,1)"} fontSize={10} fontWeight={"hairline"} borderLeft={"1px solid rgba(41,49,61,1)"} pl={2}>15/06</Text>
                        <Text color={"rgba(121,129,151,1)"} fontSize={10} style={{ paddingTop: "5px" }} alt={"ecuador"} fontWeight={"hairline"} borderLeft={"1px solid rgba(41,49,61,1)"} pl={2}>20:00</Text>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box mt={3} mb={3}>
                    <Text fontSize={10} fontWeight={"hairline"} color={"rgba(121,129,151,1)"}>Group B</Text>
                </Box>
                <Box mt={3} mb={3} display={"flex"} justifyContent={"space-between"}>
                    <Box display={'flex'}>
                        <Box>
                            <Box>
                                <Image alt={"spain"} src={`/flags/spain.png`} height={24} width={24}></Image>
                            </Box>
                            <Image alt={"croatia"} src={`/flags/croatia.png`} height={24} width={24}></Image>
                        </Box>
                        <Box>
                            <Text fontSize={12} fontWeight={"extrabold"} pl={1}>ESP</Text>
                            <Text fontSize={12} style={{ paddingTop: "12px" }} alt={"iran"} fontWeight={"extrabold"} pl={1}>CRO</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text color={"rgba(121,129,151,1)"} fontSize={10} fontWeight={"hairline"} borderLeft={"1px solid rgba(41,49,61,1)"} pl={2}>15/06</Text>
                        <Text color={"rgba(121,129,151,1)"} fontSize={10} style={{ paddingTop: "5px" }} alt={"ecuador"} fontWeight={"hairline"} borderLeft={"1px solid rgba(41,49,61,1)"} pl={2}>23:00</Text>
                    </Box>
                </Box>
                <Box mt={3} mb={3} display={"flex"} justifyContent={"space-between"}>
                    <Box display={'flex'}>
                        <Box>
                            <Box>
                                <Image alt={"italy"} src={`/flags/italy.png`} height={24} width={24}></Image>
                            </Box>
                            <Image alt={"albania"} src={`/flags/albania.png`} height={24} width={24}></Image>
                        </Box>
                        <Box>
                            <Text fontSize={12} fontWeight={"extrabold"} pl={1}>ITA</Text>
                            <Text fontSize={12} style={{ paddingTop: "12px" }} alt={"iran"} fontWeight={"extrabold"} pl={1}>ALB</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text color={"rgba(121,129,151,1)"} fontSize={10} fontWeight={"hairline"} borderLeft={"1px solid rgba(41,49,61,1)"} pl={2}>16/06</Text>
                        <Text color={"rgba(121,129,151,1)"} fontSize={10} style={{ paddingTop: "5px" }} alt={"ecuador"} fontWeight={"hairline"} borderLeft={"1px solid rgba(41,49,61,1)"} pl={2}>02:00</Text>
                    </Box>
                </Box>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"}>
                <Box display={"flex"}>
                    <Box className="rounded-xl mt-1  bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                        <Box className="rounded-lg p-1" bg='#0E1114'>
                            <Button variant='unstyle' size={"xs"}><Text>{"<"}</Text></Button>
                        </Box>
                    </Box>
                    <Box ml={3} className="rounded-xl mt-1  bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                        <Box className="rounded-lg p-1" bg='#0E1114'>
                            <Button variant='unstyle' size={"xs"}><Text>{">"}</Text></Button>
                        </Box>
                    </Box>
                </Box>
                <Box mt={3} fontSize={12} style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>See all</Box>
            </Box>
        </Box>
    )
}
