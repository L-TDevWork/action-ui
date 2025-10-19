import { useState, type JSX } from "react";
import { DonationOptions } from "../../../core/constants/Constants";

export const DonationsPannel: React.FC<{
    PannelStatus: boolean,
    setPannelStatus: (status: boolean) => void
}> = ({ PannelStatus, setPannelStatus }): JSX.Element => {
    const [SelectedAmount, setSelectedAmount] = useState<number>(0);

    const handleDirectDebit = () => {
        window.open(`https://www.electronicmandate.com/aa-web/?aa_contract_amount=${SelectedAmount}`);
    }

    return <div className={`donations-pannel ${PannelStatus ? 'inline-block' : 'hidden'}`}>
        <div className="pannel">
            <h4 className="font-bold p-2">Donate to ActionAid</h4>

            <fieldset className="form-group p-2">
                <select
                    onChange={(event: React.FormEvent<HTMLSelectElement>) => setSelectedAmount(Number((event.target as HTMLSelectElement).value))}
                    className="form-control"
                    name="SelectedAmount">
                    <optgroup>
                        <option value="">Select Donation Amount</option>
                        {DonationOptions?.map((item: TDonationOption, index: number) => {
                            return <option key={index} value={item?.value}>R{item?.value}</option>
                        })}
                    </optgroup>
                </select>
            </fieldset>
            <ul className="p-2 m-2 list-none">
                {DonationOptions?.find((item: TDonationOption) => {
                    return (item?.value == SelectedAmount)
                })?.message?.map((item: string, index: number) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

            <div onClick={handleDirectDebit} className={`btn-direct-debit cursor-pointer text-center m-2 ${SelectedAmount > 0 ? 'block' : 'hidden'}`}>
                <span className="text-center">Direct Debit</span>
            </div>
        </div>
        <div onClick={() => setPannelStatus(false)} className="pannel-footer absolute bottom-0 right-0 m-2 cursor-pointer">
            <span>Close</span>
        </div>
    </div>
}