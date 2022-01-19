import { createForm } from 'svelte-forms-lib';
import { goto } from '$app/navigation';
import { get } from 'svelte/store'
import * as yup from 'yup';

// REF https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const { form, state, handleChange, handleSubmit, errors, validateField } = createForm({
	initialValues: {
		'location_id': '',
		'restricted-location': false,
		'restricted_access_description': "",
        'description': "",
        'name': "",
        'email': "",
        'asset_id': "",
        'phone': "",
        'photo': null
	},
	validationSchema: yup.object().shape({
		name: yup.string().required(),
        asset_id: yup.string().required(),
		email: yup.string().email().required(),
		phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
		description: yup.string().required(),
		'location_id': yup.string().required(),
		'restricted_access_description': yup.string().optional(),
	}),
	onSubmit: (values) => {
        //  console.log('submitting', values)
		//  goto('/report-fault/debug');
		goto('/report-fault/confirmation');
	},
});

export const validateFields = async (fields: Array<string>): Promise<void> => {
    const promises = fields.map((field) => validateField(field))
    await Promise.all(promises)
}

export const handleInput = async (e: Event): Promise<boolean> => {
    const elem = (e.target as HTMLInputElement)
    const name = elem.name
    //  @ts-ignore
	await validateField(name);

    // NOTE false for enable, true for disable
	if (get(errors)[name] === '') {
        return false
	}
    return true
};
