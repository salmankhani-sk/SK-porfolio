"use client";  // For client-side rendering in Next.js 13+

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import salman from '../../public/my-prof2.png';

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <motion.div
                className="col-span-1 lg:col-span-2 border-none bg-gray-200 p-8"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 1.2 }}
            >
                <h1 className="text-4xl lg:text-6xl">Versatile Web Developer Passionate About Innovation</h1>
                <p className="mt-4 text-muted-foreground lg:text-lg">
                    As a software engineer, I specialize in crafting efficient, user-friendly web applications using modern technologies. My focus is on developing scalable and maintainable solutions that solve real-world challenges. With a keen eye for innovation, I am dedicated to creating impactful digital experiences.
                </p>
                <a href="mailto:salmankhan.dev@outlook.com" className="relative inline-block text-lg group mt-5">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Get in Touch!</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 1.2 }}
            >
                <Image src={salman} alt="Salman Khan" className="h-[500px] object-cover rounded-lg" />
            </motion.div>
        </div>
    );
}
