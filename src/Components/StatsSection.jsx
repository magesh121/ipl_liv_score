"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Calendar, TrendingUp } from "lucide-react";

export default function StatsSection() {
    const stats = [
        { icon: Users, title: "Total Matches", value: "74" },
        { icon: Trophy, title: "Team", value: "10" },
        { icon: Calendar, title: "Tournament Duration", value: "7451 days" },
        { icon: TrendingUp, title: "Highest Score", value: "246/7" },
    ];

    return (
        <div className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    IPL 2025 Stats and Highlights
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 }}}
                        >
                            <div className="flex justify-center mb-4">
                                {React.createElement(item.icon, { className: "h-10 w-10" })}
                            </div>
                            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                            <p className="text-3xl font-bold">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}