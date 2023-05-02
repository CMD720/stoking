import React, {useRef} from 'react';
import {Box, Card, CardMedia, Typography} from "@mui/material";

const CardItems = () => {
    // const[left, setLeft]

    const items = [
        {
            image: "/img/item1.png",
            name: "Насос Pedrollo JCRm 1 B -N",
            itemId: "46JCN1B0A1",
            price: '14 161',
        },
        {
            image: "/img/item2.png",
            name: "Реагент для очистки новых систем ",
            itemId: "3031800001",
            price: '6 970',
        },
        {
            image: "/img/item3.png",
            name: "Реле давления электр. Vodotok ЭДД-12Р",
            itemId: "L4029",
            price: '2 728',
        },
        {
            image: "/img/item4.png",
            name: "Комплект фитингов Danfoss DN15 ",
            itemId: "003H6902",
            price: '1 983',
        },
        {
            image: "/img/item5.png",
            name: "S21A Пластина AiSi 316 0,5 mm TK 1234",
            itemId: "S21A ПЛАСТИНА ",
            price: '1 875',
        },

    ]

    const itemRef = useRef<HTMLDivElement>(null)
    const weid = itemRef.current?.children[0].clientWidth ?? 91;
    console.log('item REF', itemRef)
    console.log('Size chirdren - must be 182', weid)
    console.log('d')

    return (
        <Box ref={itemRef}
             sx={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 position: 'relative',
                 width: '182px',
                 height: '256px',
             }}
        >
            {
                items.map((item, index) => (
                    <Card key={index}
                          sx={{
                              width: '182px',
                              height: '256px',
                              boxShadow: '0px 0px 15px rgba(77, 77, 77, 0.15)',
                              borderRadius: '8px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                              position: 'absolute',
                              left: ` calc( 91px * ${index} ) `,
                          }}
                    >
                        <CardMedia sx={{height: 'auto', width: 'auto', justifySelf: 'end',}}
                                   component="img"
                                   image={item.image}
                        />
                        <Box>
                            <Typography sx={{
                                fontSize: '13px',
                                lineHeight: '16.25px',
                                color: '#3A3A3A',
                                mb: '15px',
                                pl: '20px'
                            }}>
                                {item.name}
                            </Typography>
                            <Typography sx={{
                                flexGrow: 1,
                                fontSize: '12px',
                                lineHeight: '16.25px',
                                color: '#3A3A3A',
                                display: 'flex',
                                mb: '15px',
                                pl: '20px'
                            }}>
                                <Typography sx={{fontSize: '12px', lineHeight: '16.25px', color: '#9C9C9C', mr: '5px'}}>
                                    Артикул:
                                </Typography>
                                {item.itemId}
                            </Typography>
                            <Typography
                                sx={{fontSize: '20px', color: '#ED7117', fontWeight: 700, ml: '20px', mb: '20px'}}>
                                {item.price} ₽
                            </Typography>
                        </Box>
                    </Card>
                ))
            }
        </Box>

    );
};

export default CardItems;