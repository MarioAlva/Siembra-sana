'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function AlvaTest() {
	const [auth, setAuth] = useState(false)
	const [showPopUp, setShowPopUp] = useState(false)
	const [addCategory, setAddCategory] = useState(false)
	const [pack, setPack] = useState({
		weight: '',
		price: '',
		packing: ''
	})
	const [products, setProducts] = useState([
		{
			id: '',
			name: '',
			description: '',
			genre: [''],
			img: [''],
			code: '',
			pack: [pack]
		}
	])
	const [product, setProduct] = useState({
		id: '',
		name: '',
		description: '',
		genre: [''],
		img: [''],
		code: '',
		pack: [pack]
	})
	const [edit, setEdit] = useState(false)
	const [addProduct, setAddProduct] = useState(false)
	const [productIndex, setProductIndex] = useState(0)
	const [name, setName] = useState('')

	const getProducts = () => {
		// fetch('https://siembrasanaapi-dev-ghhz.2.ie-1.fl0.io/products')
		fetch('http://localhost:3000/products')
			.then(res => res.json())
			.then(res => {
				setProducts(res);
			});
		}

	const resetProduct = () => {
			setProduct({
				id: '',
				name: '',
				description: '',
				genre: [''],
				img: [''],
				code: '',
				pack: [pack]
			})
			setAddCategory(false)
			setName('')
			//reset input file	
			const input = document.querySelector('input[type=file]') as HTMLInputElement
			input.value = ''
			
	}
	const openProduct = (index: number) => {
		const preview = document.querySelector('#preview') as HTMLDivElement;
		setAddCategory(false)
		setProduct(products[index])
		setProductIndex(index)
		setName(products[index].name)
		setEdit(false)
		setAddProduct(false)
		while (preview.firstChild) {
			preview.removeChild(preview.firstChild);
		  }
		const input = document.querySelector('input[type=file]') as HTMLInputElement
		input.value = ''
		products[index].img.map((img2: any, index: number) => {
			const image = new Image();
			image.title = img2;
			image.src = img2;
			image.height = 10;
			preview!.appendChild(image);
		})
	}
	const saveProduct = () => {
		const form = document.querySelector('#uploadForm') as HTMLFormElement
		const formData = new FormData(form)
		formData.append('genre', product.genre.join(',') as string)
		formData.append('img', product.img.join(',') as string)
		formData.append('oldName', name)
		if (addProduct) {
			// axios.post('https://siembrasanaapi-dev-ghhz.2.ie-1.fl0.io/products', formData, {
			axios.post('http://localhost:3000/products', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}).then(res => {
				setProduct(res.data)
				setEdit(false)
				setAddProduct(false)
				setProducts([...products, res.data])
			})
		} else {
			// console.log(formData)
			axios.put('https://siembrasanaapi-dev-ghhz.2.ie-1.fl0.io/products/' + product.id, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}).then(res => {
				setName(product.name)
				setEdit(false)
				setAddProduct(false)
				setProducts(products.map((product2 : any, index : number) => index === productIndex ? product : product2))
			})
		}
	}
	const deleteProduct = () => {
		// axios.delete('https://siembrasanaapi-dev-ghhz.2.ie-1.fl0.io/products/' + product.id).then(res => {
		axios.delete('http://localhost:3000/products/' + product.id).then(res => {
			setShowPopUp(false)
			setProducts(products.filter((product2 : any, index : number) => index !== productIndex))
			resetProduct()
		})
	}

	useEffect(() => {
		getProducts();
	}, [])
	const setProductWeight = (e : any, packIndex : number) => {
		setProduct({
			...product,
			pack: product.pack.map((pack : any, index : number) => index === packIndex ? {...pack, weight: e.target.value} : pack)
		})
	}
	const setProductPrice = (e : any, packIndex : number) => {
		setProduct({
			...product,
			pack: product.pack.map((pack : any, index : number) => index === packIndex ? {...pack, price: e.target.value} : pack)
		})
	}
	const setProductPacking = (e : any, packIndex : number) => {
		setProduct({
			...product,
			pack: product.pack.map((pack : any, index : number) => index === packIndex ? {...pack, packing: e.target.value} : pack)
		})
	}
	const addNewPack = () => {
		const newPack = {
			weight: '',
			price: '',
			packing: ''
		}
		setProduct({
			...product,
			pack: [...product.pack, newPack]
		})
	}
	const deletePack = (index : number) => {
		if (product.pack.length === 1) return
		const newPack = product.pack.filter((pack : any, i : number) => i !== index)
		setProduct({
			...product,
			pack: newPack
		})
	}
	const addNewCategory = (e : any) => {
		if (edit || addProduct){
			e.preventDefault();
			const newGenre = e.target.previousSibling.value.toLowerCase()
			setProduct({
				...product,
				genre: [...product.genre, newGenre]
			})
			setAddCategory(false)
			e.target.previousSibling.value = ''
		}
	}
	const deleteCategory = (index : number) => {
		if (edit || addProduct){
			const newGenre = product.genre.filter((genre : any, i : number) => i !== index)
			setProduct({
				...product,
				genre: newGenre
			})
		}
	}
	const cancelEdit = () => {
		setAddCategory(false)
		if (product.id !== ''){
			setProduct(products[productIndex])
			setName(product.name)
		}
		else{
			resetProduct()
		}
	}
	function readAndPreview(file: any) {
		if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
			const preview = document.querySelector('#preview');
		  const reader = new FileReader();
		  reader.addEventListener("load", function () {
			const image = new Image();
			image.title = file.name;
			image.src = this.result as string;
			image.height = 10;
			preview!.appendChild(image);
		  }, false);
		  reader.readAsDataURL(file);
		}
	  }
	const PreviewImages = () => {
		try {
		  const preview = document.querySelector('#preview');
		  if (!preview) return;
		  while (preview.firstChild) {
			preview.removeChild(preview.firstChild);
		  }
		  const files = document.querySelector('input[type=file]') as HTMLInputElement;
		  if (files.files) {
			[].forEach.call(files.files, readAndPreview);
		  }
		} catch (error) {
		  console.error(error);
		}
	}
	const authenticate = () => {
		const username = document.querySelector('#username') as HTMLInputElement
		const password = document.querySelector('#password') as HTMLInputElement
		if (username.value === 'admin' && password.value === 'admin'){
			setAuth(true)
		}
	}
	if (!auth){
		return (
			<main className="flex justify-center md:w-auto w-screen">
				<div className='bg-green-400 rounded-3xl md:px-20 px-4 py-8'>
					<form className='flex flex-col'>
						<label htmlFor="username">Usuario</label>
						<input type="text" name="username" id="username" />
						<label className='mt-3' htmlFor="password">Contraseña</label>
						<input type="password" name="password" id="password" />
						<button onClick={() => authenticate()} className='mt-3 bg-green-500 font-bold'>Enviar</button>
					</form>
				</div>
			</main>
		)
	}
	return (
		<main className="flex justify-center md:w-auto w-screen">
			{showPopUp && 
			<div className='w-screen h-screen flex justify-center items-center fixed z-50 top-0 left-0 bg-black/20'>
				<div className='p-12 bg-green-300 rounded-3xl shadow-md w-[700px] flex flex-col items-center'>
					<span className='text-xl text-center'>Se borrará el producto <span className='font-bold text-red-500'>permanentemente</span>. ¿Estas seguro que quieres continuar?</span>
					<div className='flex justify-around mt-12 w-full'>
						<button className='text-xl px-6 py-1 rounded-full bg-red-500 text-white hover:bg-red-600' onClick={() => deleteProduct()}>Eliminar</button>
						<button className='text-xl px-6 py-1 rounded-full bg-green-500 text-white hover:bg-green-600' onClick={() => setShowPopUp(false)}>Cancelar</button>
					</div>
				</div>
			</div>
			}
			<div className="flex w-[1200px] flex-col-reverse md:flex-row max-w-full relative bg-green-400 py-12 md:px-16 px-4 rounded-[50px]">
				<div className='md:w-1/2 w-full flex justify-center md:mt-0 mt-4'>
					<form 
    				  id='uploadForm'
					  className='[&>input]:border flex flex-col w-[370px] max-w-full'>
						<div className='flex justify-between'>
							<h1 className='text-xl font-bold'>Producto</h1>
							{product.id !== '' && 
								<div
									className='px-3 py-1 bg-green-500 rounded-[10px] cursor-pointer font-bold hover:bg-green-600'
									onClick={() => {!addProduct && setEdit(!edit); addProduct && setAddProduct(false); cancelEdit()}}
								>
									{(!addProduct && !edit) ? 'Editar' : 'Cancelar'}
								</div>
							}
						</div>
						<label htmlFor="name">Nombre</label>
						<input type="text" name="name" value={product.name} disabled={!edit && !addProduct} onChange={(e) => setProduct({...product, name: e.target.value})}/>
						<label htmlFor="description">Descripción</label>
						<textarea name="description" value={product.description} disabled={!edit && !addProduct} onChange={(e) => setProduct({...product, description: e.target.value})}  />
						<label htmlFor="category">Categoria</label>
						<div className="flex">
							{product.genre.map((genre : any, index : number) => (
								genre !== '' &&
								<div key={index} className='relative text-sm bg-neutral-400 rounded-full pl-2 pr-5 mx-1'>
									<div onClick={() => deleteCategory(index)} className='cursor-pointer absolute right-[2px] w-4 h-4 bg-neutral-600 flex justify-center items-center rounded-full text-white top-1'>x</div>
									<span className='text-xs'>{genre}</span>
								</div>
							))}
							{(edit || addProduct) &&
								<button className='bg-green-500 rounded-xl font-bold hover:bg-green-600 px-2' onClick={(e) => {(edit || addProduct) && setAddCategory(true); e.preventDefault()}}>+ Añadir</button>
							}	
						</div>
						{addCategory &&
							<div className='flex mt-2'>
								<input className='w-full' type="text" name="category" /><button className='bg-green-500 ml-2 px-2 text-sm font-bold' onClick={(e) => addNewCategory(e)}>Añadir</button>
							</div>
						}
						<label htmlFor="sampleFile">Imagen</label>
    				    <input type="file" name="sampleFile" multiple disabled={!edit && !addProduct} onChange={() => PreviewImages()}/>
						<div id='preview' className='flex h-12 [&>img]:w-10 [&>img]:h-auto'>
						  	{/* {img &&
						    	img.map((img2: any, index: number) => (
						      	<Image2 src={img2} width={12} height={12} alt="" className='w-12' key={index} />
						    ))} */}
						</div>
						<label htmlFor="productCode">Codigo de producto</label>
						<input type="text" name='productCode' value={product.code} disabled={!edit && !addProduct} onChange={(e) => setProduct({...product, code: e.target.value})} />
						{product.pack && product.pack.map((pack : any, index : number) => (
							<div key={index} className='flex flex-col relative my-2 shadow-lg pb-4 pt-10 px-4 rounded-3xl bg-green-300'>
								<div className="absolute top-2 right-2 w-8 h-8 bg-red-500 z-40 cursor-pointer flex justify-center items-center rounded-full text-white font-bold text-lg hover:bg-red-600" onClick={() => {(edit || addProduct) && deletePack(index)}}>x</div>
								<div className='flex justify-between w-full'>
									<div className='flex flex-col relative max-w-1/2 w-[120px]'>
										<label htmlFor="weight">Peso</label>
										<input className='pr-7' type="number" name="weight" value={product.pack[index].weight} disabled={!edit && !addProduct} onChange={(e) => setProductWeight(e, index)}  />
										<span className='absolute right-1 bottom-0 text-neutral-500'>g</span>
									</div>
									<div className='flex flex-col relative max-w-1/2 w-[120px]'>
										<label htmlFor="price">Precio</label>
										<input className='pr-7' type="number" name="price" step='any' value={product.pack[index].price} disabled={!edit && !addProduct} onChange={(e) => setProductPrice(e, index)} />
										<span className='absolute right-1 bottom-0 text-neutral-500'>€</span>
									</div>
								</div>
								<label htmlFor="packing">Empaquetado</label>
								<input type="text" name='packing' value={product.pack[index].packing} disabled={!edit && !addProduct} onChange={(e) => setProductPacking(e, index)}  />
							</div>
						))}
						{(edit || addProduct) && 
							<div className={'w-full rounded-full flex justify-center items-center bg-green-300 h-16 text-lg font-bold mt-2 cursor-pointer hover:bg-green-500'} onClick={() => {(addProduct || edit) && addNewPack()}}>+ Añadir nuevo pack</div>
						}
						{(edit || addProduct) && <input onClick={() => saveProduct()} type='button' value="Guardar" className='cursor-pointer bg-green-600 hover:bg-green-400 mt-3 py-3 rounded-full font-bold' />}
						{(!edit && !addProduct && name) && <input onClick={() => setShowPopUp(true)} type='button' value="Eliminar" className='cursor-pointer bg-red-600 hover:bg-red-700 mt-3 py-3 rounded-full font-bold' />}
    				</form>
				</div>
				<div className='md:w-1/2 w-full flex flex-col'>
					<span className='px-3 py-1 bg-green-500 rounded-[10px] flex cursor-pointer font-bold hover:bg-green-600' onClick={() => {setAddProduct(true); resetProduct()}}>+ Añadir nuevo producto</span>
					<div className='w-full bg-green-200 h-full max-h-[400px] overflow-y-auto'>
						{(products.length > 0) && products.map((product : any, index: number) => (
							<div className='w-full h-6 flex items-center bg-green-500 hover:bg-green-600 cursor-pointer' key={product.id} onClick={() => openProduct(index)}>
								{product.name}
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}