import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useLazyLoginQuery } from '@pages/id/_api';

const formSchema = yup.object({
	email: yup.string().email('E-mail is invalid').required('E-mail is required'),
	password: yup.string().min(8).required('Password is required')
});

const useLogin = () => {
	const [request, result] = useLazyLoginQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			email: '',
			password: ''
		},
		onSubmit: async ({ value }) => {
			await request(value);
		}
	});

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[ID]: Login:', result.data);
	}, [result.isSuccess, result.data]);

	return form;
};

export default useLogin;
