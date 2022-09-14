import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu:createMenuObject('all'),
        banner: {
            title: 'todos os animais',
            background:'allanimals.jpg'
        }
    })

}

export const dogs = (req: Request, res:Response)=>{
    let list = Pet.getAll();

    res.render('pages/page', {
        menu:createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    })

}

export const cats = (req: Request, res:Response)=>{
    res.render('pages/page', {
        menu:createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background:'banner_cat.jpg'
        }
    })

}

export const fishes = (req: Request, res:Response)=>{
    res.render('pages/page', {
        menu:createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background:'banner_fish.jpg'
        }
    })

}