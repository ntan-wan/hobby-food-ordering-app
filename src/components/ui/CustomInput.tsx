import {Input} from '@/components/ui/input';
// import {CustomIcon} from '@/components/ui/CustomIcon'
import { cn } from '@/lib/utils';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	className?: string;
}

export function CustomInput({placeholder, className, ...props}: IProps) {

	const variant = {
		base: 'pl-[36px] h-12',
	}

	return (
		<div className={cn('relative', className)}>
			{/* <CustomIcon name='search' className='absolute left-[8px] top-[8px] size-5'/> */}
			<Input placeholder={placeholder} {...props} className={cn(variant.base)}/>
		</div>
	)
}