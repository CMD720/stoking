import React from 'react';
import {Box, CardMedia, ListItemText, Typography} from "@mui/material";

const WorkStages = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    alignItems: 'center',
                    justifyContent: 'center',
                    position:'relative',
                    // justifyContent: 'space-between',
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection:'column',
                        /*justifyContent: 'space-between',*/
                    }}
                >
                    <CardMedia
                        sx={{
                            height: 57,
                            width: 57,
                            // transform: {xs: 'rotate(90deg)', sm: 'none'},
                            mb: {xs:'20px', sm:'10px'},
                        }}
                        image="/img/step1.png"
                        title="step1"
                    />
                    <ListItemText  sx={{textAlign: 'center', fontSize: '10px',}}
                                  primary="Свяжитесь с нами"
                                  secondary={"Оставьте заявку в форме обратной связи. В кротчайшее сроки наши специалисты свяжутся с вами."}
                    />

                </Box>
                {/**********DASHED LINE**********/}
                <CardMedia
                    sx={{
                        height: 2,
                        width: 200,
                        display: {xs:'none',md:'block'},
                        position:'absolute',
                        top:'25px',
                        left:'20.5%'
                    }}
                    image="/img/horizontal_dash.png"
                    title="customer"
                />
                <CardMedia
                    sx={{
                        height: 88,
                        width: 2,
                        display: {xs:'block',md:'none'},
                        my:'12px',
                    }}
                    image="/img/vertical_dash.svg"
                    title="customer"
                />

                <Box sx={{display: 'flex',  flexDirection:'column',alignItems: 'center'}}>
                    <CardMedia
                        sx={{
                            height: 57,
                            width: 57,
                            mb: {xs:'20px', sm:'10px'},
                        }}
                        image="/img/step2.png"
                        title="step2"
                    />
                    <ListItemText
                        sx={{textAlign: 'center'}}
                        primary="Предоставьте остатки "
                        secondary={"Отправьте нам данные о наличии товара и цены для продажи, в любой удобной для вас форме. Техническую интеграцию больших объемов товаров берем на себя."}
                    />
                </Box>
                {/**********DASHED LINE**********/}
                <CardMedia
                    sx={{
                        height: 2,
                        width: 200,
                        display: {xs:'none',md:'block'},
                        position:'absolute',
                        top:'25px',
                        right:'24.5%'
                    }}
                    image="/img/horizontal_dash.png"
                    title="customer"
                />
                <CardMedia
                    sx={{
                        height: 88,
                        width: 2,
                        display: {xs:'block',md:'none'},
                        my:'12px',
                    }}
                    image="/img/vertical_dash.svg"
                    title="customer"
                />

                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <CardMedia
                        sx={{
                            height: 57,
                            width: 57,
                            mb: {xs:'20px', sm:'10px'},
                        }}
                        image="/img/step3.png"
                        title="step3"
                    />
                    <ListItemText
                        sx={{textAlign: 'center'}}
                        primary="Обновляйте остатки"
                        secondary={"Поддерживайте остатки и стоимости в актуальном виде и все продажи будут вашими. Мы об этом позаботимся!"}
                    />
                </Box>


            </Box>

        </div>
    );
};

export default WorkStages;