import { useState } from 'react';
import '../index.scss';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import craig_logo from '../Assets/craigs.png'
import ebay_logo from '../Assets/ebay.png'
import fb_logo from '../Assets/fb.png'
import { Kbd } from "@vechaiui/react"
import { Button } from "@vechaiui/react"

const QueryBuilder = (props) => {

const [tags, setTags] = useState([]);
const [price, setPrice] = useState([]);
const [plat1, setPlat1] = useState(false)
const [plat2, setPlat2] = useState(false)
const [plat3, setPlat3] = useState(false)

const addTags = event => {
    if (event.key === "Enter" && event.target.value !== ""){
        setTags([...tags, event.target.value]);
        event.target.value="";
    }
    if (tags.length === 2){
        event.target.placeholder='Maximum Keywords'
        document.getElementById('keyword-input').disabled = true;
    }
};
const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    if (tags.length <= 3){
        document.getElementById('keyword-input').placeholder='Press Enter to add keywords'
        document.getElementById('keyword-input').disabled = false;
    }
};
const addPrice = event => {
    if (event.key === "Enter" && event.target.value !== ""){
        setPrice([...price, "$" + event.target.value]);
        event.target.value="";
    }
    if (price.length === 0){
        event.target.placeholder = 'Max Price Set'
        document.getElementById('price-input').disabled = true;
    }
};
const removePrice = index => {
    setPrice([...price.filter(e => price.indexOf(e) !== index)])
    document.getElementById('price-input').placeholder='Press Enter to set Max Price'
    document.getElementById('price-input').disabled = false;
}
const Countries = [
    { label: "All", value: 355 },
    { label: "General", value: 54 },
    { label: "Automobiles", value: 43 },
    { label: "Motorcycles", value: 61 },
    { label: "Electronics", value: 965 },
    { label: "Bicycles", value: 46 },
    { label: "Machinery", value: 58 },
    { label: "Free", value: 58 }
  ];
const plat1_func = () => {
    if (plat1 === false){
        setPlat1(true);
        document.getElementById("Craigslist").classList.add('selected')
    }
    else {
        setPlat1(false)
        document.getElementById("Craigslist").classList.remove('selected')
    }
}
const plat2_func = () => {
    if (plat2 === false){
        setPlat2(true);
        document.getElementById("Facebook").classList.add('selected')
    }
    else {
        setPlat2(false)
        document.getElementById("Facebook").classList.remove('selected')
    }
}
const plat3_func = () => {
    if (plat3 === false){
        setPlat3(true);
        document.getElementById("Ebay").classList.add('selected')
    }
    else {
        setPlat3(false)
        document.getElementById("Ebay").classList.remove('selected')
    }
}

const addQuery = () =>{
    let queryObj = {
        keywords: tags,
        price: price
    }
    props.setQuery(queryObj)
    props.handleClose()
    console.log(props.queries)
}


  return (
      <div>
        <div class='flex-column'>
            <div class='flex flex-row query-row'>
                <div class='query-num'>
                    <h1 class='num'>1</h1>
                </div>
                <div class='flex flex-col grid-row-1 query-con'>
                    <h4>keywords</h4>
                        <div className="tags-input">
                            <ul id="tags">
                                {tags.map((tag, index) => (
                                    <li key={index} className="tag">
                                        <span className='tag-title'>{tag}</span>
                                        <span className='tag-close-icon'
                                            onClick={() => removeTags(index)}
                                        >
                                            x
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <input
                                type="text"
                                id='keyword-input'
                                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                                placeholder="Press Enter to add keywords"
                            />
                            {tags.length === 3 &&
                                <div className='check-wrap'>
                                    <FontAwesomeIcon icon={faCheck} color={'green'} />
                                </div>
                            }
                    </div>
                </div>
            </div>
            <div class='flex flex-row query-row'>
                <div class='query-num'>
                    <h1 class='num'>2</h1>
                </div>
                    <div class='flex flex-col grid-row-2 query-con'>
                        <h4>max price</h4>
                        <div className="tags-input">
                            <ul id="tags">
                                {price.map((p, index) => (
                                    <li key={index} className="price-tag">
                                        <span className='tag-title'>{p}</span>
                                        <span className='tag-close-icon'
                                            onClick={() => removePrice(index)}
                                        >
                                            x
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <input
                                type="text"
                                id='price-input'
                                onKeyUp={event => event.key === "Enter" ? addPrice(event) : null}
                                placeholder="Press Enter to add Max Price"
                            />
                            {price.length === 1 &&
                                <div className='check-wrap'>
                                    <FontAwesomeIcon icon={faCheck} color={'green'} />
                                </div>
                            }
                        </div>
                    </div>
            </div>
            <div class='flex flex-row query-row'>
                <div class='query-num'>
                    <h1 class='num'>3</h1>
                </div>
            <div class='flex flex-col grid-row-3 query-con'>
            <h4>category</h4>
                <Select options={Countries} className="tester" placeholder="All" />
                
            </div>
            </div>
            <div class='flex flex-row query-row'>
                <div class='query-num'>
                    <h1 class='num'>4</h1>
                </div>
            <div class='flex flex-col grid-row-4 query-con'>
            <h4>platforms</h4>
                <div class="platform-con">
                    <div class="line">
                        <button class="plat-box" onClick={ () => plat1_func()} id='Craigslist'>
                            <div class="plat-img">
                                <img src={craig_logo} alt='Craigslist' />
                                {plat1 === true &&
                                <div className='check-wrap'>
                                    <FontAwesomeIcon icon={faCheckCircle} color={'green'} class="check-plat" />
                                </div>
                                }
                                {plat1 === false &&
                                <div className='check-wrap'>
                                    <FontAwesomeIcon icon={faTimes} color={'grey'} class="x-plat" />
                                </div>
                                }
                            </div>
                        </button>
                    </div>
                    <div class="line">
                        <button class="plat-box" onClick={ () => plat2_func()} id='Facebook'>
                            <div class="plat-img">
                                <img src={fb_logo} alt='Facebook Marketplace' />
                                {plat2 === true &&
                                <div className='check-wrap'>
                                    <FontAwesomeIcon icon={faCheckCircle} color={'green'} class="check-plat" />
                                </div>
                                }
                                {plat2 === false &&
                                <div className='check-wrap'>
                                    <FontAwesomeIcon icon={faTimes} color={'grey'} class="x-plat" />
                                </div>
                                }
                            </div>
                        </button>
                    </div>
                    <div class="line">
                        <button class="plat-box" onClick={ () => plat3_func()} id='Ebay'>
                            <div class="plat-img">
                                <img src={ebay_logo} alt='eBay' />
                                {plat3 === true &&
                                <div className='check-wrap'>
                                    <FontAwesomeIcon icon={faCheckCircle} color={'green'} class="check-plat" />
                                </div>
                                }
                                {plat3 === false &&
                                <div className='check-wrap'>
                                    <FontAwesomeIcon icon={faTimes} color={'grey'} class="x-plat" />
                                </div>
                                }
                            </div>
                        </button>
                    </div>
                </div>
                
            </div>
            </div>
            <div class='bottom-btn-con'>
                <button type='button' class='save-query-btn' onClick={() => addQuery()}>Save Query</button>
            </div>
        </div>
      </div>
      
  );
}

export default QueryBuilder;
