import  { PropTypes } from 'prop-types'; 
import { useId } from "react"

/**
 * 
 * @param {boolean} checked
 * @param {(v:boolean =>void)} onChange
 * @param {string} label
 * @param {string} id
 * @returns 
 */
export  function  Checkbox({checked, onChange,label}) {
  
    // Valider les props en utilisant PropTypes
  Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
  };

  //erreurs potentielles
  if (typeof checked !== 'boolean') {
    console.error('Checkbox : La prop "checked" doit être une valeur booléenne.');
  }
  if (typeof onChange !== 'function') {
    console.error('Checkbox : La prop "onChange" doit être une fonction.');
  }
  if (typeof label !== 'string') {
    console.error('Checkbox : La prop "label" doit être une chaîne de caractères.');
  }

  
    const id = useId()
    return (
        <div  className="form-check">
    <input id={id} type="checkbox"  className="form-check-input" checked={checked} onChange={(e)=> onChange(e.target.checked)} />
    <label htmlFor={id} className="form-check-label">{label}</label>
        </div>

    )
    
}
 
