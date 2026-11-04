import { motion } from "framer-motion";
import { useMotion } from "@/context/MotionContext";

export default function Reveal({
    children,
    delay = 0,
    y = 24,
    className = "",
    testId,
}) {
    const { reduced } = useMotion();
    if (reduced) {
        return (
            <div className={className} data-testid={testId}>
                {children}
            </div>
        );
    }
    return (
        <motion.div
            className={className}
            data-testid={testId}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
