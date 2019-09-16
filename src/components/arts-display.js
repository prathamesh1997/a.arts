import React from 'react';

import { Typography, Container , Grid , Card , CardMedia , CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    contentDisplay:{
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop: '56.25%',
    },
    cardContent:{
        flexGrow:1
    }
}));

const cards =[{image:'https://lh3.googleusercontent.com/wKYveDdqMhwtj6rIz3dJEY2SjHn2SZIZsent8jfNux1pVbrSUg4etmFKTu7fkcSNXETl9aWXyTlej9HiiZ5AHjGite_fJUUIZAqjqaMLHXftiZvQToH25N1barL5G6PdvzsKBDuDdF4suMpgawUVEDjpooUXKoLsOQOKHqp09dpN6NrlkIONEM6zadmTSqGK-EyVzxTQrrtKkndiv2NYmI18BIE4-LeRhsNcVO1QZ3s5296jzEdQ4ACF_Jl3ypTscQ_MpFurfgtsJUbX8Vo0nCcTONPLcOgC9--e71NrZwrUo6ZPAeO_W9Yf_qJyWUwf2YK3gRyhShD-yP4WXtiysq5xWZf_w3eP7vzRRoS_-_a2UcNjEKI07dRsjL6GLSiYKD-zhu1Li0ddwWgs665TiH-CTpMJGsRoLYi9UPLRKxsFri_6GFbPJVGQ_OsJ-pSq8-gMt9GBvjVFJtwE8kqEqG9R6snfMrZn3K2F_c6_wZue7KdaM1vuRiBE__kAdiOjGF1Dmvauy5i9Bv5plQWAUFWM7qSmUsVyD5lW3nAnx-hCXKT0thsKVqiU1Hmf-s2L_CHRizxEfaZQf99lCgrtmQrU0aIofGwq63N-mhKSOlS68A8q_E0F4SbPKuiW3dJZKvBhIKRXEQqTejqY9COpyd_c6z-z1d8d2J9_rIpCvX25IMd3zHC6Bw=w876-h657-no',title:'Brooch',description:'Hand made Brooch'},
              {image:'https://lh3.googleusercontent.com/UmRiXl3TPTtuZN_BaeLxrqKoxis5VmSzvnAVgwxzJ0dhTNexun0zx1U6iliAfEb3xmdrYksOw-n0cTXdFMj_sFBtsG0-rB018dw5ki57PwI4LxVGjdFTtM-0D93BC4SdvJv1wm2gvLS_bSylRhIGMHp79PQeABPT7GrPQAgXqiNY5esKE4WY-gj9UqEOpHuqW1ZB4yGTW2bFOW-YLlW38DhrdOZYRkStf9N1vvT97rssyHRdbt3ex7RAaAICOR1c23n95nk7F4El4KDUA-vTA67XNqCqrv3ZK3oBs7-tyH6v2sdYD3KWtsKcsN7ou5F3Ac8JpRFuvunBOhH5UWcXnpc3f9lr1R2XwBOKu4NWSzi_UofUsqK8r7PYPKY0oF3QTJGGMZhegCd3EBJ3bL9PYzkcrr1RVL-3tE9KeBKV8dsnQwTfZ10jdG1s_pLAIQ4yN0dUvlE_bVikWLbeBcXJFUGDBR3UvSxg2fe3f5ERQn3eWTvrJ-BWlFR-9WLhegPHYDOy_OREWuwfhEfrZf03oIk0gpHBpvR_UF4mA2LJT7bDAuhPnhH0ZiEGGT9eEp7ZRWXzLg9wCfP7OTCpyB1Xcv6B4L04kM_bT5xC3yF5FGMccq8HJH6jh_RdKpfVV0oXOp5N-qEszGYnZB_s8oAXjx4Z-VudGzbV-VkJinCPpu2FbGPJUz6bxw=w526-h657-no',title:'Niranjan',description:'Haldi kunku Dish.'},
              {image:'https://lh3.googleusercontent.com/TeyMoeLGa3TC-mQiqKu18ChlESPJBMrJyW4dDCDBsOQyeL4wE6fZGxXoMeIDIOKwPovulSfLy_KbmH8Rnw3orhkSMNgAc5UFmIPJmvXrXXRsmoyW-1oZsV9-26MkuCuf5l1KQ2SJnKCqzcOS0epl0d2gDlideuroy-ipjIenhg6Kb4VgZL32QKUeRkxtz1sWGC5-SG3wgebJkKn3uaOEjrtYZv85YPBNBT66d8n1GjASBFxbtREQ0-QCOhZdehGL1U0CHjAZc4B1fCxg-DMj687VnSFbMOhmh8fDQPjJysZJyhxq1aUEYQzAJX1a1FFvSMjcRTD-b4AWUfrR6peEM3UqyqPGx0JvWpKmodmyAOuXWVSmWr8fJJYb3lzrRi89t7VrekxkQyY2VqCK4GK--NRD_2T-GrC55eeh3ZyrBHBOuvbYW8DOB3m__nSRPdiuD18QNhMy-470ZDGOuKfs1pRO00To0fCOQc6qeju8IuTXIgpMV158awB3DAdQAvSYW0gAI9-wGNeFB92uN3kr6uzLxzHHqOn64OHAqZw4N_nv9abmF4nNEuWP-2lZsQT55wBBL6YErtLokiuyTJxXM5QShVwPQ7TeLKjiFHKcb6Xd0c94C9uRCU5Cap-M8XomHhQJTFdJlM-ljGkCvhEXg2uNT0iMYqbLI0OK2zkYNbX0Xnaul-qisg=w194-h193-no',title:'Niranjan.',description:'Haldi Kunku Dish.'},
              {image:'https://lh3.googleusercontent.com/5iXSbMSyWXp3WWXGLjUft4ryAPGnUM7ZSi-vaZmnqdvImV1TQIm2FnxUwEGMC5ZWPl1h2oeKpI3nIhf0FP5qubooQzJP-UnFb29_vfmTjLzTXkrKm3VSAU7vAzaeOGCaHQfvE2HyV8mGwO7wwznqTigYapbZOyDALGZ4nldYjeJjT5DjfE33kdr-aIGZgTlnIG1s6EHcXtUtcP35SGZ800osrER1Y36N7rgwL05z-bEGzYuLiAjr08sLby9yLh6zgX6GCBZUGhrPVnU27KaRx-SJShze12-oLhLsGcJVuC4pi-FWW_GL9cADUunRL30dvjQFMM3VdIHCMxtrr2jfsd4LVLqftUBGKworG7JtuSawuIz5Wq3zq2zqt0PUN7_DGKIFn9WGlEq0zfHEXdwrjNQpZhMNSHFppY01uWcMh7igMq9WtVnfiWwi4oU70u2JUJdnHbbn0wUJ2HtYamAKXs48vjYO5CDsapNim86QSnQBmKujZ2Cx1_xl8vqtT_YLGJ3rRA_yodv9lnk-Op2RQJ1cGm76L6XgjVlZrPoaxzMZGQ1bUaZSufS4B9sDqNds0a71wRT4oIqMYidscg6p6U5NnenymwaMojVSkf0FgfF2d4QfuOar6ZDSa0_lbIaeMCMk6UDIUd5o_9ePMeO8JJEBcw9f8SRFh9FQNFCA2cqA-kD0ubhFcA=s657-no',title:'Ganpati Bappa',description:'Ganpati murti.'},
              {image:'https://lh3.googleusercontent.com/f-B0EzlTJAsaR_SyKnspddOZPzyeXeCxIrlSakMkOInkDAQMf35gQOAVdQcnkMrSfauquEdvy_StiM4Cchl4xHtpAA4k9Q-fMTVhnfDzSELQIqGfWz8-Z2BYF64lHlEjbCidVypKjSPQM_FaqWYx7Wxrgh6Ub37Vl797ycSulsx9C0-sXN3Lmmdz7U2o3lr38fpJDPEdifQERzU2pwNtOYGAReM-iQVOHDyoNyTIbcx5azCVawGEWkQoen2BjfJRi2nCTSNP98GS8HLs4GBvE6v1VICsRAyKeW9isC0KFkbaVRwDxB6kLFU9RPrf5S_kU2wUWF72kOVTsIm283e-aO7RKQEui5Vtx59Y5tMYsbs_pYIlVCpGU7Jqr23nDObWH2NwBJAucgWjmkxf2khF4dLGjnkg8z-CSQFuVgGOsRLPpintfyxdWVfn3OcA8OjC6A2FVIgYuiFXfqxAD6c--nTl4K7kjx5KT-IOD8-Oe9TjPPruzBDMOlZVf8VFVts4WILxprmPtss1Q9uU5b0ku7NF3sIBR-TvbCdpPkkiHV-ooohvZCdx5btVZRtNdjgznR1XHsnEx7MFOZGRLQy_Pbcg_gywDXwh4juhqNzqYH20LM6ug6YAfV61fXVPCKq-4VIfg0V-BJ85Sn8Ch9P-PHKPefvCxXMF1Zy6gvle5YNK5tmClfpygg=s220-no',title:'Brooch',description:'Hand made Brooch'},
              {image:'https://lh3.googleusercontent.com/hX80mhcARFCDsWXIAc59WwOsz5aVL-ZQtH56DCdCdQwrdjGVM1d5LnmzplAikg_jGIsPPLGlpnQC_Z8gxGybJW72cSWP-uohvq4sZhNCMVQ5lvbSWO_UAgAHz_ViA-T84DLEj_k45jTv3HawgnHcly9EjaroS5HY_KP3RqN9coQiRRpCcUGEU8gcAsNsa_gOeRez1wDxryzkK6jCJKFSOJl08Kyz25LhqAMaJiIeVQIthK3spGnrIWuOG7CfYBQPQj-vd5hyty5XHM2D8PbU2ktvlrR_Rv2o2bzJXd82plTgO9XZe8wUwOIbEC2sy6_rfkudLlS2tY1e9MZ7cSF1r-hHbmTuObbF4aqoXz576vv4Oeky955Llw8yHOfnDB5dsLH6glg7Zm4isjhH-zd26jTyb1bFqBH_DVFvWH-fCx8GTDBj0UzjH6yB0xHDKxdoBOjzidive2TLr5okMrISPZMvEaskjgEYuPvRFPaE4vH4SBSI1FpSdCH1zkqhPGAXmegu1tqhNflJd8VQlTTxieLNEIV0HcGmsD4cq_QxmJ7UhXblLeqgFjIYYpeWzLwN0HPGqlZSEbiFnoiNjnJMmK37_Y_BTeIIuOEHeJZP3fTEbVZMYHt_9kUo56KE8KLrnJb9rPVA9mB_dWglJctpKF-ZVPCsYp3tgnh1Wi9PaqdONlh287WvlA=w242-h182-no',title:'Woolen craft',description:'Made by wool.'},
              {image:'https://lh3.googleusercontent.com/bwrUg1zLIOUMFwuYjIIZ4qLl0NY7MBHko1gRw35jKeTJdY7wB-bOTld6mTGSaTFKWW4mE_FJciKr93YvB5FQw5fWO16_XNJ-2rNK5x2FDwNFj83JOJ_AhEdlHylZ7Kkdm6pHVU3o7Tx2yGdmwqS_RlX-UsvMof6Kf7Ckajtj0iI7hW0xHwdTdZ8pCZCgMoieEHgKyr25Vq_E1oueh2hxhQdB9fkZmNpCo_PiEzhBTOjb3L8s6XiKO6b4dI4qpfz33vtt5Uwlyfni9H2V_9tjNgjwOYZHeSg0Jt8O3gIHJ85Z6LhZOPGtv_FvE4hDSloFAgsx6ZaTnL52Uzd2otxD60g2rx0wj_viNUBEo47jrw10cfi-TUd7-lp5AQ8m_bN7x-IuyJ9463jGr88ro1lleYaABJxyyMjx_M43n3e6GAHUKjM29oVQYFN3zY-n52PX737Bz97Y5DCoXKMBL4Wo2l7I0eWV_QSTQu9dh1T2LkJRShqNNsbup2lwsNPHX62rXxvwr1JcbWkuM7QMZCOX0GVKvDnwR5XjV_I3zMepzA4_Qa0ef_x8RDQNWsNhdO7hyboCvTJFSytLX3QCCixk6n8H6KOo36x2UTZyfhVfloPwYBmfeCr0YprEu4W4UzplDM0KsDWk9LtLmbwoi3J335huQtRC7n_2pJJ6MKeLHxfPF_8Bejq89g=w263-h196-no',title:'Brooch',description:'Hand made Brooch'}
            ]

export function ArtsDisplay(){

    const classes = useStyles();

    return(
        <React.Fragment>
                <Container maxWidth="md"  className={classes.contentDisplay}>
                    <Grid container spacing={4}>
                       {
                           cards.map(data=>(
                                    <Grid item key="123" xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={data.image}
                                            title="Image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                                {data.title}
                                            </Typography>
                                            <Typography align="center">
                                                {data.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                           ))
                       }
                    </Grid>
                </Container>
        </React.Fragment>
    )
}