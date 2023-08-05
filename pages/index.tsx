import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

import React, { useState } from 'react';

import Chess from '@/components/chess.js'
import Dot from '@/components/dot.js'
import Lattice from '@/components/lattice.js'
import Circular from '@/components/circular.tsx'
import Grid from '@/components/grid.js'
import Bias from '@/components/bias.js'

import {Checkbox} from '@nextui-org/checkbox';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import Color from '@/components/color.js'
import Color2 from '@/components/color.js'
import styles from './index.module.css'

const defaultColor = [{
	color:'#C0C6A3',
	colorTwo:'#ffffff',
},
{
	color:'#edcb8c',
	colorTwo:'#ffffff',
},
{
	color:'#8c8eed',
	colorTwo:'#ffffff',
},
{
	color:'#eeb3be',
	colorTwo:'#ffffff',
},
{
	color:'#e2d89f',
	colorTwo:'#ffffff',
},
{
	color:'#a1704f',
	colorTwo:'#ffffff',
},
{
	color:'#000000',
	colorTwo:'#ffffff',
}
]
const AllColors = {
	'chess':[
		{
			color:'#c0c6a2',
			colorTwo:'#edebdb',
		},
		{
			color:'#2d2c31',
			colorTwo:'#317f72',
		},
		{
			color:'#bb393e',
			colorTwo:'#e4d4c6',
		},
		
		{
			color:'#2a292c',
			colorTwo:'#4492db',
		},
		{
			color:'#303039',
			colorTwo:'#7e66bf',
		},
		{
			color:'#6c993c',
			colorTwo:'#a7c939',
		},
		{
			color:'#385047',
			colorTwo:'#b6c9bd',
		},
		{
			color:'#7e1719',
			colorTwo:'#e5dd43',
		}
	],
	'dot':[
		...defaultColor
	],
	'lattice':[
		...defaultColor
	],
	'circular':[
		{
			color:'#76979f',
			colorTwo:'#beb07c',
		},
		{
			color:'#83769f',
			colorTwo:'#82be7c',
		},
		{
			color:'#9e7693',
			colorTwo:'#7cbeb6',
		},
		{
			color:'#8dc58d',
			colorTwo:'#e7eb80',
		},
		{
			color:'#ee783f',
			colorTwo:'#98e4cc',
		},
		{
			color:'#a1ad5f',
			colorTwo:'#edc25c',
		},
		{
			color:'#ffb8c5',
			colorTwo:'#8ae6df',
		},
		
		{
			color:'#6c993c',
			colorTwo:'#cde386',
		},
		
	],
	'grid':[
		...defaultColor
	],
	'bias':[
		{
			color:'#a00368',
			colorTwo:'#f0e1ed',
		},
		{
			color:'#c0c6a2',
			colorTwo:'#edebdb',
		},
		...defaultColor
	],
	'all':[
		...defaultColor
	]
}


let optionalColor = []
export default function IndexPage() {
	const [color, setColor] = useState('#c0c6a2');
	const [colorTwo, setColorTwo] = useState('#edebdb');
	const [texture, setTexture] = useState('chess');
	const [isSelected, setIsSelected] = useState(false);
	const [exchangeColor, setExchangeColor] = useState(false);
	const [optionalColors, setOptionalColors] = useState(0);
	
	return (
		<div className={styles.main} >
			<div className={styles.controlColor}>
			
				<Checkbox isSelected={isSelected} onValueChange={setIsSelected}>是否有边框</Checkbox>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Checkbox isSelected={exchangeColor} onValueChange={(item)=>{
					setExchangeColor(item)
					let col = color
					setColor(colorTwo)
					setColorTwo(col)
					
				}}>交换颜色</Checkbox>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;纹理&nbsp;&nbsp;&nbsp;
					<Dropdown>
					<DropdownTrigger>
						<Button 
						variant="bordered" 
						>
						{texture}
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Static Actions" onAction={(key) => setTexture(String(key))}>
						<DropdownItem key="chess">Chess</DropdownItem>
						<DropdownItem key="dot">Dot</DropdownItem>
						<DropdownItem key="lattice">Lattice</DropdownItem>
						<DropdownItem key="circular">circular</DropdownItem>
						<DropdownItem key="grid">grid</DropdownItem>
						<DropdownItem key="bias">bias</DropdownItem>
					</DropdownMenu>
					</Dropdown>

					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预定色&nbsp;&nbsp;&nbsp;
					<Dropdown>
					<DropdownTrigger>
						<Button 
						variant="bordered" 
						>
						{optionalColors}
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Static Actions" onAction={(key) => {
						setOptionalColors(key)
						console.log(111,AllColors[texture][key])
						if(exchangeColor){
							setColor(AllColors[texture][key].colorTwo)
							setColorTwo(AllColors[texture][key].color)
						}else{
							setColor(AllColors[texture][key].color)
						setColorTwo(AllColors[texture][key].colorTwo)
						}	
						
					}}>
					{
						AllColors[texture].map((item,index)=>(
							<DropdownItem key={index}>  
								<div>
								{item.color} &nbsp;&nbsp;&nbsp; <div className={styles.selectColor} style={{background:item.color}}></div>  
								{item.colorTwo} &nbsp;&nbsp;&nbsp; <div className={styles.selectColor} style={{background:item.colorTwo}}></div>  
								</div>
							 </DropdownItem>
						))
					}
						
					</DropdownMenu>
					</Dropdown>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>color1:</i> <Color color={color} setColor={setColor}> </Color>
				&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>color2:</i> <Color2 color={colorTwo} setColor={setColorTwo}> </Color2>
				&nbsp;&nbsp;&nbsp;
				{/* <i>need border:</i> <Color2 color={colorTwo} setColor={setColorTwo}> </Color2> */}
			</div>  
				
			{/* style={{ border:`40px solid ${color}`,background:color}} */}
			<div className={styles.mainTexture} style={{ border:`${isSelected?'20px':'0'} solid ${color}`}} > 
			{texture === 'chess'?<Chess colorOne={color} colorTwo={colorTwo}/> :""}
			{texture === 'dot'?<Dot colorOne={color} colorTwo={colorTwo}/> :""}
			{texture === 'lattice'?<Lattice colorOne={color} colorTwo={colorTwo}/> :""}
			{texture === 'circular'?<Circular colorOne={color} colorTwo={colorTwo}/> :""}
			{texture === 'grid'?<Grid colorOne={color} colorTwo={colorTwo}/> :""}
			{texture === 'bias'?<Bias colorOne={color} colorTwo={colorTwo}/> :""}
				
			</div>
		</div>
    
			
		// </DefaultLayout>
	);
}
