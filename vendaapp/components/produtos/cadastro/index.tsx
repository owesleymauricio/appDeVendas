"use client"; // This is a client component 

import { Input, Layout } from "@/components";
import React, { useState, createContext } from "react";
import 'bulma/css/bulma.css'


export const CadastroProdutos: React.FC = () => {
    const [sku, setSku] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const submit = () => {

        const convertendoParaNumber = parseFloat(price).toFixed(2);

        const produto = {
            sku,
            price: convertendoParaNumber,
            name,
            desc
        }
        console.log(produto)
    }
    return (
        <Layout title="Cadastro de Produtos">

            <div className="columns ">
                <Input label="SKU:"
                    columnClasses="is-half"
                    onChange={setSku}
                    value={sku}
                    id="inputSku"
                    placeholder='enter the product SKU'
                />

                <Input label="Price:"
                    columnClasses="is-half"
                    onChange={setPrice}
                    value={price}
                    id="inputPrice"
                    placeholder='enter the product price'
                />

            </div>

            <div className="columns">
                <Input label="Name:"
                    columnClasses="is-full"
                    onChange={setName}
                    value={name}
                    id="inputName"
                    placeholder='enter the product name'
                />

            </div>

            <div className="columns">
                <div className="field">
                    <label htmlFor='inputDesc' className="label">Description:</label>
                    <div className="control">
                        <textarea className="textarea"
                            id='inputDesc' value={desc}
                            onChange={event => setDesc(event.target.value)}
                            placeholder="enter the product description">

                        </textarea>
                    </div>
                </div>
            </div>


            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link"
                        onClick={submit}
                    >Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
            </div>

        </Layout>
    )
}


