import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sandfall',
  imports: [],
  templateUrl: './sandfall.html',
  styleUrl: './sandfall.sass',
})
export class Sandfall implements AfterViewInit {
  @ViewChild('gridCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  private rows = 10;
  private cols = 10;

  private canvas: any;
  private grid: any;
  private cellSize: number = 0;

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));

    this.cellSize = this.canvas.width / this.cols;

    this.canvas.addEventListener('click', (e: any) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const { row, col } = this.getCellAt(x, y);

      if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
        // Toggle cell color (black → white, white → black)
        this.grid[row][col] = this.grid[row][col] === 0 ? 1 : 0;
        this.drawGrid();
      }
    });

    this.drawGrid();
  }

  drawGrid() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.ctx.fillStyle = this.grid[r][c] === 1 ? 'white' : 'black';
        this.ctx.fillRect(c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);
        this.ctx.strokeStyle = 'gray';
        this.ctx.strokeRect(c * this.cellSize, r * this.cellSize, this.cellSize, this.cellSize);
      }
    }
  }

  getCellAt(x: number, y: number) {
    const col = Math.floor(x / this.cellSize);
    const row = Math.floor(y / this.cellSize);
    return { row, col };
  }
}
