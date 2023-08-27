import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { EditorType } from 'zodTypes';
import { editorsRawVideoAtom } from 'store';

export const EditorSelect: React.FC<{ editors: Partial<EditorType[]>, onSelect: (value: string) => void }> = ({ editors, onSelect }) => {

    const [localEditors, setLocalEditors] = useState<Partial<EditorType[]>>(editors);
    const [isEmpty, setEmpty] = useState<boolean>();
    const setEditors = useSetRecoilState(editorsRawVideoAtom);
    const [value, setValue] = useState<string>();

    useEffect(() => {
        if (editors && editors.length > 0) {
            setLocalEditors(editors);
            // setEditors(editors)
            setEmpty(false);
        } else if (editors && editors.length == 0) {
            setEmpty(true);
        }
    }, [editors]);

    return (
        <>
            <select
                onChange={(e) => setValue(e.target.value)}
                className="block w-[500px] text-xl h-[60px] px-4 bg-white border border-gray-300 rounded-xl shadow-lg  hover:shadow-2xl transition-all duration-300 focus:ring-indigo-500 focus:border-indigo-500 "
            >
                <option value="" className='' disabled selected>
                    {editors.length > 0 ? 'Select Editor For this Video:' : 'Video Not Added By any Editor to its leger :('}
                </option>
                {editors.map((option) => (
                    <option key={option?._id} value={option?._id}>
                        {option?.name} - {option?.username}
                    </option>
                ))}
            </select>
            <button
            onClick={() => {
                if(value) {
                    onSelect(value);
                }
            }}
            className="w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all"
          >
              Select This Editor
          </button>
        </>
    );
}
