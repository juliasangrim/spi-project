import React, { useState } from 'react';
import ButtonDelete from '../../general/components/Button/ButtonDelete';
import '../styles/EditParameterForm.css';
import Button from '../../general/components/Button/Button';

interface Props {
    selectedItem: any
    itemList: any[],
    handleUpdateData: (selectedItem: any, items: any[]) => any;
}

function EditParameterForm({ selectedItem, itemList, handleUpdateData }: Props) {
  const [newVersionFormState, setNewVersionFormState] = useState('');
  const [selectedItemState, setSelectedItemState] = useState(selectedItem);
  const [itemListState, setItemListState] = useState(itemList);

  const handleSaveChanges = () => {
    handleUpdateData(selectedItemState, itemListState);
  };

  const handleAddNewItem = () => {
    setItemListState([...itemListState, newVersionFormState]);
  };

  const handleSelectItem = (item: any) => {
    setSelectedItemState(item);
  };

  const handleDeleteItem = (itemForRemove: any) => {
    setItemListState(itemList.filter((item) => item !== itemForRemove));
  };

  return (
    <form>
      <div className="edit-default-config__input-group">
        <input
          className="edit-default-config__input"
          placeholder="Enter new version..."
          onChange={(e) => setNewVersionFormState(e.target.value)}
        />
      </div>

      <div className="edit-parameter-form">
        {
            itemListState.map((item) => (
              <div key={item} className="edit-parameter-form__form-elem">
                <label htmlFor={item}>
                  <input
                    type="radio"
                    id={item}
                    value={item}
                    name="version"
                    onChange={(e) => handleSelectItem(e.currentTarget.value)}
                  />
                  {item}
                </label>
                <ButtonDelete onClick={() => handleDeleteItem(item)} />
              </div>
            ))
        }
      </div>
      <Button label="Save" onClick={handleSaveChanges} />
      <Button label="Add" onClick={handleAddNewItem} />
    </form>
  );
}

export default EditParameterForm;
