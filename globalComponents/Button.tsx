import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    asChild?: boolean;
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = '',
            variant = 'default',
            size = 'default',
            asChild = false,
            isLoading = false,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        // Base styles
        const baseStyles = [
            'inline-flex items-center justify-center rounded-md font-medium transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2',
            'disabled:opacity-50 disabled:pointer-events-none ring-offset-white',
        ].join(' ');

        // Variant styles
        const variantStyles: Record<ButtonVariant, string> = {
            default: 'bg-gray-900 text-white hover:bg-gray-800',
            secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
            destructive: 'bg-red-500 text-white hover:bg-red-600',
            outline: 'border border-gray-200 bg-transparent hover:bg-gray-100',
            ghost: 'bg-transparent hover:bg-gray-100',
            link: 'bg-transparent underline-offset-4 hover:underline text-gray-900',
        };

        // Size styles
        const sizeStyles: Record<ButtonSize, string> = {
            default: 'h-10 py-2 px-4 text-sm',
            sm: 'h-9 px-3 rounded-md text-sm',
            lg: 'h-11 px-8 rounded-md text-base',
        };

        // Combine all styles
        const combinedClassName = [
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className,
        ].join(' ');

        if (asChild) {
            const child = React.Children.only(children);
            return React.cloneElement(child as React.ReactElement, {
                className: combinedClassName,
                ref,
                ...props,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any);
        }

        return (
            <button
                className={combinedClassName}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <span className="mr-2 h-4 w-4 animate-spin">
                        {/* Simple loading spinner (replace with your own SVG if needed) */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                    </span>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };